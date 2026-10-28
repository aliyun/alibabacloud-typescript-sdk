// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureResultExportResponseBodyDataOssInfo extends $dara.Model {
  /**
   * @remarks
   * The OSS path where the export results are stored.
   * 
   * @example
   * oss://testBucketName/data_result
   */
  exportBasePath?: string;
  /**
   * @remarks
   * The name of the resource group in which the export SQL statement is executed.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The expiration time of the OSS file. Unit: days. The minimum value is 1 day and the maximum value is 30 days.
   * 
   * @example
   * 10
   */
  resultFileTtl?: number;
  static names(): { [key: string]: string } {
    return {
      exportBasePath: 'ExportBasePath',
      resourceGroup: 'ResourceGroup',
      resultFileTtl: 'ResultFileTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportBasePath: 'string',
      resourceGroup: 'string',
      resultFileTtl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureResultExportResponseBodyDataSlsInfo extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the temporary Logstore generated for result set export. Unit: days. The Logstore is automatically deleted after expiration. The minimum value is 1 day and the maximum value is 30 days.
   * 
   * @example
   * 10
   */
  logstoreTtl?: number;
  /**
   * @remarks
   * The name of the resource group in which the export SQL statement is executed.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * test-project
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreTtl: 'LogstoreTtl',
      resourceGroup: 'ResourceGroup',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreTtl: 'number',
      resourceGroup: 'string',
      slsProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureResultExportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * - SLS: Exports data to SLS.
   * - OSS: Exports data to OSS.
   * 
   * @example
   * SLS
   */
  exportType?: string;
  /**
   * @remarks
   * The OSS export information configured when the export destination is OSS.
   */
  ossInfo?: ConfigureResultExportResponseBodyDataOssInfo;
  /**
   * @remarks
   * The SLS configuration information when the export destination is SLS.
   */
  slsInfo?: ConfigureResultExportResponseBodyDataSlsInfo;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      ossInfo: 'OssInfo',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      ossInfo: ConfigureResultExportResponseBodyDataOssInfo,
      slsInfo: ConfigureResultExportResponseBodyDataSlsInfo,
    };
  }

  validate() {
    if(this.ossInfo && typeof (this.ossInfo as any).validate === 'function') {
      (this.ossInfo as any).validate();
    }
    if(this.slsInfo && typeof (this.slsInfo as any).validate === 'function') {
      (this.slsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureResultExportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The configured result set export information.
   */
  data?: ConfigureResultExportResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A status code of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information about the call result. Description:
   * 
   * - If the request is normal, OK is returned.
   * - If the request is abnormal, a specific error code is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ConfigureResultExportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

