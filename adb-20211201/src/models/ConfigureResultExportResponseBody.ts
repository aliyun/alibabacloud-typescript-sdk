// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureResultExportResponseBodyDataOssInfo extends $dara.Model {
  /**
   * @remarks
   * The OSS path where the result sets are stored.
   * 
   * @example
   * oss://testBucketName/data_result
   */
  exportBasePath?: string;
  /**
   * @remarks
   * The name of the resource group that runs the job.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The expiration time of the OSS file. Unit: days. Minimum: 1 day, maximum: 30 days.
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
   * The expiration time of the Logstore temporarily generated during the result set export. Unit: days. The Logstore is automatically deleted after it expires. Minimum value: 1 day. Maximum value: 30 days.
   * 
   * @example
   * 10
   */
  logstoreTtl?: number;
  /**
   * @remarks
   * The name of the resource group that runs the job.
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
   * *   SLS: Indicates that the export destination is SLS.
   * *   OSS: Indicates that the export destination is OSS.
   * 
   * @example
   * SLS
   */
  exportType?: string;
  /**
   * @remarks
   * The OSS configuration if the destination is of the OSS type.
   */
  ossInfo?: ConfigureResultExportResponseBodyDataOssInfo;
  /**
   * @remarks
   * The SLS configuration if the destination is of the SLS type.
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
   * The path where the result sets are stored.
   */
  data?: ConfigureResultExportResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   OK is returned if the request is normal.
   * *   The specific error code is returned if the request is abnormal,
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: Succeeded.
   * *   **false**: Failed.
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

