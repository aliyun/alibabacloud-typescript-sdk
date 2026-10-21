// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The database description.
   * 
   * @example
   * This is diamonds dataset.
   */
  databaseDesc?: string;
  /**
   * @remarks
   * The database name.
   *   - When ImportType is FILE, this parameter indicates the file name.
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
   * The update time of the database description.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  descUpdateTime?: string;
  /**
   * @remarks
   * The ID of the DMS database where the instance is hosted.
   *   - This parameter is not returned when ImportType is FILE.
   * 
   * @example
   * 73088962
   */
  dmsDbId?: number;
  /**
   * @remarks
   * The ID of the DMS instance where the instance is hosted.
   *   - This parameter is not returned when ImportType is FILE.
   * 
   * @example
   * 2740966
   */
  dmsInstanceId?: number;
  /**
   * @remarks
   * The public network download link.
   *   - **[Deprecated]**
   */
  downloadLink?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The import type. Valid values:
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
   *   - When ImportType is FILE, this parameter indicates the file ID in the data center.
   * 
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  /**
   * @remarks
   * The internal network download link.
   *   - **[Deprecated]**
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * Indicates whether the dataset is built-in. Valid values:
   *   - Y: The dataset is built-in.
   *   - N: The dataset is not built-in.
   * 
   * @example
   * N
   */
  isInternal?: string;
  /**
   * @remarks
   * The name of the user\\"s OSS bucket.
   * 
   * @example
   * bgc-hangzhou-test-bucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 999
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the user\\"s OSS bucket is used.
   * 
   * @example
   * true
   */
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
   * The error code returned when an exception occurs in the request.
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
   * Indicates whether the request is successful. Valid values:
   *   - **true**: The request is successful.
   *   - **false**: The request fails.
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

