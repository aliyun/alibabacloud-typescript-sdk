// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoAuditResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 视频审校任务的唯一标识，可用于后续查询任务状态和结果
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SubmitVideoAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务处理结果状态码
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * 视频审校任务提交后的返回数据
   */
  data?: SubmitVideoAuditResponseBodyData;
  /**
   * @remarks
   * HTTP响应状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 业务处理结果描述信息
   * 
   * @example
   * 任务提交成功
   */
  message?: string;
  /**
   * @remarks
   * 本次API请求的唯一标识
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否处理成功
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
      data: SubmitVideoAuditResponseBodyData,
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

