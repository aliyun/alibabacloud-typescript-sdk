// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The database description.
   * 
   * @example
   * This is a sample database.
   */
  databaseDesc?: string;
  /**
   * @remarks
   * The database name.
   * - When ImportType is FILE, this parameter indicates the file name.
   * 
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 6kv159u9vtpvl**********b8
   */
  dbId?: string;
  /**
   * @remarks
   * - When ImportType is FILE:
   *   - File type: dbType indicates the file format, such as csv, xlsx, or xls.
   * 
   * @example
   * csv
   */
  dbType?: string;
  /**
   * @remarks
   * The time when the database description was last updated.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  descUpdateTime?: string;
  /**
   * @remarks
   * The ID of the Data Management database that hosts the instance.
   *   - This parameter is not returned when ImportType is FILE.
   * 
   * @example
   * 73088962
   */
  dmsDbId?: number;
  /**
   * @remarks
   * The ID of the Data Management instance that hosts the instance.
   *   - This parameter is not returned when ImportType is FILE.
   * 
   * @example
   * 2740966
   */
  dmsInstanceId?: number;
  downloadLink?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The import type.
   *   - FILE
   *   - RDS
   *   - ADB
   *   - PolarDB
   *   - Hologres
   *   - DMS
   * 
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @remarks
   * The instance name.
   * - When ImportType is FILE, this parameter indicates the file ID in the data center.
   * 
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  intranetDownloadLink?: string;
  /**
   * @remarks
   * Indicates whether the dataset is built-in. Valid values:
   * - Y: The dataset is built-in.
   * - N: The dataset is not built-in.
   * 
   * @example
   * N
   */
  isInternal?: string;
  ossBucket?: string;
  /**
   * @remarks
   * The file size, in bytes.
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
   * The response struct.
   */
  data?: ListDataCenterDatabaseResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
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
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.                                 
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

