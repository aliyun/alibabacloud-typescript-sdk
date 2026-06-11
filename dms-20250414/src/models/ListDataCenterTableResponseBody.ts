// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterTableResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * - If `ImportType` is `FILE`, this parameter returns the file name.
   * 
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @remarks
   * The time when the data table description was last updated.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  descUpdateTime?: string;
  /**
   * @remarks
   * The ID of the DMS database.
   * 
   * - This parameter is not returned if `ImportType` is `FILE`.
   * 
   * @example
   * 69950353
   */
  dmsDbId?: number;
  /**
   * @remarks
   * The ID of the DMS instance that hosts the database.
   * 
   * - This parameter is not returned if `ImportType` is `FILE`.
   * 
   * @example
   * 2310246
   */
  dmsInstanceId?: number;
  /**
   * @remarks
   * The time when the data table was created.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The import type. Valid value:
   * 
   * - **FILE**: The data is imported from a file.
   * 
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * - If `ImportType` is `FILE`, this parameter returns the file ID.
   * 
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  /**
   * @remarks
   * The description of the data table.
   * 
   * @example
   * 这是一份钻石数据。
   */
  tableDesc?: string;
  /**
   * @remarks
   * The ID of the data table.
   * 
   * @example
   * xa8wib4ga3a2*********fjbx
   */
  tableId?: string;
  /**
   * @remarks
   * The table name.
   * 
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
  /**
   * @remarks
   * A list of the data tables.
   */
  content?: ListDataCenterTableResponseBodyDataContent[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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
  /**
   * @remarks
   * The data returned in the response.
   */
  data?: ListDataCenterTableResponseBodyData;
  /**
   * @remarks
   * The code that indicates the result of the request. If the request fails, an error code is returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
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

