// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectPancResponseBodyData } from "./DetectPancResponseBodyData";


export class DetectPancResponseBody extends $dara.Model {
  data?: DetectPancResponseBodyData;
  /**
   * @remarks
   * 提交异步任务后的提示信息。
   * 
   * @example
   * 该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。
   */
  message?: string;
  /**
   * @example
   * CA1C672A-4F85-1CD9-893D-3434C924C4B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectPancResponseBodyData,
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

