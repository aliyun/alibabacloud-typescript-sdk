// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmcoreDiagnosisTaskResponseBodyDataUrls extends $dara.Model {
  /**
   * @remarks
   * Download link for the debuginfo-common RPM package
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo-common/file/path
   */
  debuginfoCommonUrl?: string;
  /**
   * @remarks
   * Link to download the debuginfo RPM package
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo/file/path
   */
  debuginfoUrl?: string;
  /**
   * @remarks
   * Download link for the dmesg log
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/dmesg/file/path
   */
  dmesgUrl?: string;
  /**
   * @remarks
   * Download link for the vmcore file
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/vmcore/file/path
   */
  vmcoreUrl?: string;
  static names(): { [key: string]: string } {
    return {
      debuginfoCommonUrl: 'debuginfoCommonUrl',
      debuginfoUrl: 'debuginfoUrl',
      dmesgUrl: 'dmesgUrl',
      vmcoreUrl: 'vmcoreUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuginfoCommonUrl: 'string',
      debuginfoUrl: 'string',
      dmesgUrl: 'string',
      vmcoreUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmcoreDiagnosisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2025-12-02T17:36:12
   */
  createdAt?: string;
  /**
   * @remarks
   * Diagnosis Result
   * 
   * @example
   * result
   */
  diagnoseResult?: string;
  /**
   * @remarks
   * Diagnosis error message
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  /**
   * @remarks
   * Task Status
   * 
   * @example
   * running
   */
  taskStatus?: string;
  /**
   * @remarks
   * Task Type
   * 
   * @example
   * vmcore
   */
  taskType?: string;
  /**
   * @remarks
   * Download links for files associated with the job
   */
  urls?: GetVmcoreDiagnosisTaskResponseBodyDataUrls;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      diagnoseResult: 'diagnoseResult',
      errorMsg: 'errorMsg',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      taskType: 'taskType',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      diagnoseResult: 'string',
      errorMsg: 'string',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
      urls: GetVmcoreDiagnosisTaskResponseBodyDataUrls,
    };
  }

  validate() {
    if(this.urls && typeof (this.urls as any).validate === 'function') {
      (this.urls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmcoreDiagnosisTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Other status codes indicate authorization failure. When authorization fails, view the `message` field to obtain detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result
   */
  data?: GetVmcoreDiagnosisTaskResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVmcoreDiagnosisTaskResponseBodyData,
      message: 'string',
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

