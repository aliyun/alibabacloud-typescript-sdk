// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operation code of the cloud service configuration check task. Valid values:
   * 
   * - **Throttling**: Throttling.
   * - **ActionTrailUnauthorized**: Unauthorized error.
   * 
   * @example
   * Throttling
   */
  operateCode?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 8eded533-5348-468c-aa1d-0aa2934a7***
   */
  taskId?: string;
  /**
   * @remarks
   * The duration of the throttling. Unit: seconds.
   * 
   * @example
   * 1800
   */
  throttlingTimeSecond?: number;
  static names(): { [key: string]: string } {
    return {
      operateCode: 'OperateCode',
      taskId: 'TaskId',
      throttlingTimeSecond: 'ThrottlingTimeSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCode: 'string',
      taskId: 'string',
      throttlingTimeSecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: VerifyCheckResultResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C0A3FA0-AA32-5660-8989-85A5582F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: VerifyCheckResultResponseBodyData,
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

