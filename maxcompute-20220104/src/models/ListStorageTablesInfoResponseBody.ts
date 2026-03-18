// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageTablesInfoResponseBodyDataStorageTableInfoList extends $dara.Model {
  date?: string;
  isPartitioned?: boolean;
  lastAccessTime?: number;
  longTermStorage?: number;
  longTermStorageFileCount?: number;
  longTermStorageUnit?: string;
  lowFreqStorage?: number;
  lowFreqStorageFileCount?: number;
  lowFreqStorageUnit?: string;
  projectName?: string;
  rate?: number;
  schemaName?: string;
  standardStorage?: number;
  standardStorageFileCount?: number;
  standardStorageUnit?: string;
  storageType?: string;
  tableName?: string;
  totalFrequency?: number;
  totalInputAmount?: number;
  totalInputAmountUnit?: string;
  totalStorage?: number;
  totalStorageFileCount?: number;
  totalStorageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      isPartitioned: 'isPartitioned',
      lastAccessTime: 'lastAccessTime',
      longTermStorage: 'longTermStorage',
      longTermStorageFileCount: 'longTermStorageFileCount',
      longTermStorageUnit: 'longTermStorageUnit',
      lowFreqStorage: 'lowFreqStorage',
      lowFreqStorageFileCount: 'lowFreqStorageFileCount',
      lowFreqStorageUnit: 'lowFreqStorageUnit',
      projectName: 'projectName',
      rate: 'rate',
      schemaName: 'schemaName',
      standardStorage: 'standardStorage',
      standardStorageFileCount: 'standardStorageFileCount',
      standardStorageUnit: 'standardStorageUnit',
      storageType: 'storageType',
      tableName: 'tableName',
      totalFrequency: 'totalFrequency',
      totalInputAmount: 'totalInputAmount',
      totalInputAmountUnit: 'totalInputAmountUnit',
      totalStorage: 'totalStorage',
      totalStorageFileCount: 'totalStorageFileCount',
      totalStorageUnit: 'totalStorageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      isPartitioned: 'boolean',
      lastAccessTime: 'number',
      longTermStorage: 'number',
      longTermStorageFileCount: 'number',
      longTermStorageUnit: 'string',
      lowFreqStorage: 'number',
      lowFreqStorageFileCount: 'number',
      lowFreqStorageUnit: 'string',
      projectName: 'string',
      rate: 'number',
      schemaName: 'string',
      standardStorage: 'number',
      standardStorageFileCount: 'number',
      standardStorageUnit: 'string',
      storageType: 'string',
      tableName: 'string',
      totalFrequency: 'number',
      totalInputAmount: 'number',
      totalInputAmountUnit: 'string',
      totalStorage: 'number',
      totalStorageFileCount: 'number',
      totalStorageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoResponseBodyData extends $dara.Model {
  date?: string;
  pageNumber?: number;
  pageSize?: number;
  storageTableInfoList?: ListStorageTablesInfoResponseBodyDataStorageTableInfoList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storageTableInfoList: 'storageTableInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storageTableInfoList: { 'type': 'array', 'itemType': ListStorageTablesInfoResponseBodyDataStorageTableInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storageTableInfoList)) {
      $dara.Model.validateArray(this.storageTableInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoResponseBody extends $dara.Model {
  data?: ListStorageTablesInfoResponseBodyData;
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
      data: ListStorageTablesInfoResponseBodyData,
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

