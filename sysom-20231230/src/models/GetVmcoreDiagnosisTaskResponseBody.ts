// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmcoreDiagnosisTaskResponseBodyDataUrls extends $dara.Model {
  /**
   * @remarks
   * The download URL of the debuginfo-common RPM package.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo-common/file/path
   */
  debuginfoCommonUrl?: string;
  /**
   * @remarks
   * The download URL of the debuginfo RPM package.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo/file/path
   */
  debuginfoUrl?: string;
  /**
   * @remarks
   * The download URL of the dmesg log.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/dmesg/file/path
   */
  dmesgUrl?: string;
  /**
   * @remarks
   * The download URL of the vmcore file.
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
   * The time when the task was created.
   * 
   * @example
   * 2025-12-02T17:36:12
   */
  createdAt?: string;
  /**
   * @remarks
   * The diagnostic result.
   * 
   * @example
   * result
   */
  diagnoseResult?: string;
  /**
   * @remarks
   * The diagnostic error message.
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * vmcore
   */
  taskType?: string;
  /**
   * @remarks
   * The download URLs of related files associated with the task.
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
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetVmcoreDiagnosisTaskResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
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

