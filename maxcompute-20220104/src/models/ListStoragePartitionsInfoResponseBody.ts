// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList extends $dara.Model {
  fileCount?: number;
  fileSize?: number;
  fileSizeUnit?: string;
  isPartitioned?: boolean;
  lastAccessTime?: number;
  partition?: string;
  projectName?: string;
  rate?: number;
  schemaName?: string;
  storageType?: string;
  tableName?: string;
  totalFrequency?: number;
  totalInputAmount?: number;
  totalInputAmountUnit?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileCount: 'fileCount',
      fileSize: 'fileSize',
      fileSizeUnit: 'fileSizeUnit',
      isPartitioned: 'isPartitioned',
      lastAccessTime: 'lastAccessTime',
      partition: 'partition',
      projectName: 'projectName',
      rate: 'rate',
      schemaName: 'schemaName',
      storageType: 'storageType',
      tableName: 'tableName',
      totalFrequency: 'totalFrequency',
      totalInputAmount: 'totalInputAmount',
      totalInputAmountUnit: 'totalInputAmountUnit',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCount: 'number',
      fileSize: 'number',
      fileSizeUnit: 'string',
      isPartitioned: 'boolean',
      lastAccessTime: 'number',
      partition: 'string',
      projectName: 'string',
      rate: 'number',
      schemaName: 'string',
      storageType: 'string',
      tableName: 'string',
      totalFrequency: 'number',
      totalInputAmount: 'number',
      totalInputAmountUnit: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBodyData extends $dara.Model {
  date?: string;
  pageNumber?: number;
  pageSize?: number;
  storagePartitionInfoList?: ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storagePartitionInfoList: 'storagePartitionInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storagePartitionInfoList: { 'type': 'array', 'itemType': ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storagePartitionInfoList)) {
      $dara.Model.validateArray(this.storagePartitionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBody extends $dara.Model {
  data?: ListStoragePartitionsInfoResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListStoragePartitionsInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

