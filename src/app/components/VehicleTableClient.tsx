"use client";
import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setPagination, setSearchText } from '../store/vehicleSlice';
import { Input } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Model',
    dataIndex: 'Model',
    key: 'Model',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'Manufacturer',
    key: 'Manufacturer',
  },
  {
    title: 'Manufacturing Date',
    dataIndex: 'Manufacturing Date',
    key: 'Manufacturing Date',
    render: (text: string) => <span style={{padding: '30px'}}>{moment(text).format('DD/MM/YY')}</span>,
  },
  {
    title: 'Seating',
    dataIndex: 'Seating',
    key: 'Seating',
  },
];

const VehicleTable: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredData, searchText, pagination } = useSelector((state: RootState) => state.vehicle);

  const handleSearch = (value: string) => {
    dispatch(setSearchText(value));
  };

  const handleTableChange = (newPagination: any) => {
    dispatch(setPagination({ current: newPagination.current, pageSize: newPagination.pageSize }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Input.Search
          placeholder="Search..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-1/2 md:w-1/2 lg:w-1/3 rounded-lg border border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-300 px-4 py-2 outline-none !important"
        />

      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{
          ...pagination,
          total: filteredData.length,
          onChange: handleTableChange,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
          className: 'pagination',
        }}
        bordered
        responsive
      />
    </div>
  );
};

export default VehicleTable;
export const VehicleTableClient: React.FC = VehicleTable;

