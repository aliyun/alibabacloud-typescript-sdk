// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCheckResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operation code of the cloud service configuration check task.
   * 
   * - **Throttling**: rate limited
   * - **AuthorizationExhaust**: insufficient authorization quota
   * 
   * @example
   * Throttling
   */
  operateCode?: string;
  /**
   * @remarks
   * The rate limit duration. Unit: seconds.
   * 
   * @example
   * 1800
   */
  throttlingTimeSecond?: number;
  static names(): { [key: string]: string } {
    return {
      operateCode: 'OperateCode',
      throttlingTimeSecond: 'ThrottlingTimeSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCode: 'string',
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

export class SubmitCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned when the API call is successful.
   */
  data?: SubmitCheckResponseBodyData;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CE8369A6-A843-5E1B-A613-78E6920D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task that runs the cloud service configuration check.
   * 
   * @example
   * 5fe3f65d-4012-455d-8232-2a98a858****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitCheckResponseBodyData,
      requestId: 'string',
      taskId: 'string',
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

