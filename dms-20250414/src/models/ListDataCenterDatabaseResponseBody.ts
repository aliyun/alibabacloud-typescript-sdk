// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * This is a sample database.
   */
  databaseDesc?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * - If `ImportType` is `FILE`, this is the file name.
   * 
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 6kv159u9vtpvl**********b8
   */
  dbId?: string;
  /**
   * @remarks
   * - If `ImportType` is `FILE`:
   * 
   *   - The file format, such as `csv`, `xlsx`, or `xls`.
   * 
   * @example
   * csv
   */
  dbType?: string;
  /**
   * @remarks
   * The time the database description was last updated.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  descUpdateTime?: string;
  /**
   * @remarks
   * The ID of the database in DMS.
   * 
   * - This parameter is not returned if `ImportType` is `FILE`.
   * 
   * @example
   * 73088962
   */
  dmsDbId?: number;
  /**
   * @remarks
   * The ID of the DMS instance that manages the database.
   * 
   * - This parameter is not returned if `ImportType` is `FILE`.
   * 
   * @example
   * 2740966
   */
  dmsInstanceId?: number;
  downloadLink?: string;
  /**
   * @remarks
   * The time the entry was created.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The import type. Valid values:
   * 
   * - FILE
   * 
   * - RDS
   * 
   * - ADB
   * 
   * - PolarDB
   * 
   * - Hologres
   * 
   * - DMS
   * 
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * - If `ImportType` is `FILE`, this parameter specifies the file ID in the data center.
   * 
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  intranetDownloadLink?: string;
  /**
   * @remarks
   * Indicates whether the dataset is built-in. Valid values:
   * 
   * - Y: The dataset is built-in.
   * 
   * - N: The dataset is not built-in.
   * 
   * @example
   * N
   */
  isInternal?: string;
  ossBucket?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 999
   */
  size?: number;
  useUserOssBucket?: boolean;
  static names(): { [key: string]: string } {
    return {
      databaseDesc: 'DatabaseDesc',
      databaseName: 'DatabaseName',
      dbId: 'DbId',
      dbType: 'DbType',
      descUpdateTime: 'DescUpdateTime',
      dmsDbId: 'DmsDbId',
      dmsInstanceId: 'DmsInstanceId',
      downloadLink: 'DownloadLink',
      gmtCreated: 'GmtCreated',
      importType: 'ImportType',
      instanceName: 'InstanceName',
      intranetDownloadLink: 'IntranetDownloadLink',
      isInternal: 'IsInternal',
      ossBucket: 'OssBucket',
      size: 'Size',
      useUserOssBucket: 'UseUserOssBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseDesc: 'string',
      databaseName: 'string',
      dbId: 'string',
      dbType: 'string',
      descUpdateTime: 'string',
      dmsDbId: 'number',
      dmsInstanceId: 'number',
      downloadLink: 'string',
      gmtCreated: 'string',
      importType: 'string',
      instanceName: 'string',
      intranetDownloadLink: 'string',
      isInternal: 'string',
      ossBucket: 'string',
      size: 'number',
      useUserOssBucket: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCenterDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of databases.
   */
  data?: ListDataCenterDatabaseResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request fails.
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
   * - **true**: The request was successful.
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
      data: { 'type': 'array', 'itemType': ListDataCenterDatabaseResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

