// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterTableResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  descUpdateTime?: string;
  /**
   * @example
   * 69950353
   */
  dmsDbId?: number;
  /**
   * @example
   * 2310246
   */
  dmsInstanceId?: number;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  tableDesc?: string;
  /**
   * @example
   * xa8wib4ga3a2*********fjbx
   */
  tableId?: string;
  /**
   * @example
   * diamonds
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      descUpdateTime: 'DescUpdateTime',
      dmsDbId: 'DmsDbId',
      dmsInstanceId: 'DmsInstanceId',
      gmtCreated: 'GmtCreated',
      importType: 'ImportType',
      instanceName: 'InstanceName',
      tableDesc: 'TableDesc',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      descUpdateTime: 'string',
      dmsDbId: 'number',
      dmsInstanceId: 'number',
      gmtCreated: 'string',
      importType: 'string',
      instanceName: 'string',
      tableDesc: 'string',
      tableId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCenterTableResponseBodyData extends $dara.Model {
  content?: ListDataCenterTableResponseBodyDataContent[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  totalElements?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListDataCenterTableResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCenterTableResponseBody extends $dara.Model {
  data?: ListDataCenterTableResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataCenterTableResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

