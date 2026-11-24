// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResultExportConfigResponseBodyDataOssInfo extends $dara.Model {
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
   * The expiration time of the OSS files. Unit: days. Minimum value: 1. Maximum value: 30.
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

export class DescribeResultExportConfigResponseBodyDataSlsInfo extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the temporarily generated Logstore for result set export. Unit: days. The Logstore is automatically deleted after it expires. Minimum value: 1. Maximum value: 30.
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

export class DescribeResultExportConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * - SLS: The export destination is SLS.
   * - OSS: The export destination is OSS.
   * 
   * @example
   * OSS
   */
  exportType?: string;
  /**
   * @remarks
   * The OSS information when the export type is OSS.
   */
  ossInfo?: DescribeResultExportConfigResponseBodyDataOssInfo;
  /**
   * @remarks
   * The SLS configurations when the export type is SLS.
   */
  slsInfo?: DescribeResultExportConfigResponseBodyDataSlsInfo;
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
      ossInfo: DescribeResultExportConfigResponseBodyDataOssInfo,
      slsInfo: DescribeResultExportConfigResponseBodyDataSlsInfo,
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

export class DescribeResultExportConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation status code or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeResultExportConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned. A status code of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the call result.
   * - If the request is successful, **OK** is returned. 
   * - If an exception occurs, the specific error message is returned.
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
   * Indicates whether the request is successful. Valid values:
   * - **True**: The request is successful.
   * - **False**: The request failed.
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
      data: DescribeResultExportConfigResponseBodyData,
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

