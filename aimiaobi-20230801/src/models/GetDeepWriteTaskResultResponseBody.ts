// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeepWriteTaskResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://aimiaobi-service-pre-hangzhou.oss-cn-hangzhou.aliyuncs.com/aimiaobi/deep-write-workspace/142***1/dbaaebd1-eb1b-41e8-9b99-******-result.zip?Expire=1111
   */
  artifactUrl?: string;
  /**
   * @example
   * f8707efa-c30e-407f-a611-50871aa68952
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactUrl: 'ArtifactUrl',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactUrl: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeepWriteTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetDeepWriteTaskResultResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
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
      data: GetDeepWriteTaskResultResponseBodyData,
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

