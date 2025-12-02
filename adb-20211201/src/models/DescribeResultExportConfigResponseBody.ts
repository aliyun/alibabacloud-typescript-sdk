// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResultExportConfigResponseBodyDataOssInfo extends $dara.Model {
  /**
   * @remarks
   * The path of the OSS bucket to which the result sets are exported.
   * 
   * @example
   * oss://testBucketName/data_result
   */
  exportBasePath?: string;
  /**
   * @remarks
   * The name of the resource group that runs the export SQL.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The expiration period (in days) for the OSS file. The returned value is between 1 and 30 days (inclusive).
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
   * The expiration period (in days) for the temporary Logstore automatically created during result set export. The Logstore is automatically deleted after expiration. The returned value is between 1 and 30 days (inclusive).
   * 
   * @example
   * 10
   */
  logstoreTtl?: number;
  /**
   * @remarks
   * The name of the resource group that runs the export SQL.
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
   * *   SLS: Indicates that the export destination is SLS.
   * *   OSS: Indicates that the export destination is OSS.
   * 
   * @example
   * OSS
   */
  exportType?: string;
  /**
   * @remarks
   * The configured OSS export settings, returned when the export destination is OSS.
   */
  ossInfo?: DescribeResultExportConfigResponseBodyDataOssInfo;
  /**
   * @remarks
   * The configured SLS export settings, returned when the export destination is SLS.
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
   * API status or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeResultExportConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP response status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   The request succeeded, and the server returns **OK**.
   * *   The request failed, and the server returns an error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: Valid values:
   * 
   * *   **True: Succeeded.**
   * *   **False: Failed.
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

