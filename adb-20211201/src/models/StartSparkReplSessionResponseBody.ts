// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSparkReplSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the cluster.
   * 
   * @example
   * 178157466******
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The attempt ID of the Spark application.
   * 
   * @example
   * s202301061000h****
   */
  attemptId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * session time out
   */
  error?: string;
  /**
   * @remarks
   * The ID of the session that executes the code.
   * 
   * @example
   * 1
   */
  sessionId?: number;
  /**
   * @remarks
   * The status of the session. Valid values:
   * 
   * *   IDLE
   * *   BUSY
   * *   DEAD
   * 
   * @example
   * IDLE
   */
  state?: string;
  /**
   * @remarks
   * The URL of the web UI for the Spark application.
   * 
   * @example
   * https://adbsparkui-cn-hangzhou.aliyuncs.com/?token=****
   */
  webUiAddress?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      attemptId: 'AttemptId',
      error: 'Error',
      sessionId: 'SessionId',
      state: 'State',
      webUiAddress: 'WebUiAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      attemptId: 'string',
      error: 'string',
      sessionId: 'number',
      state: 'string',
      webUiAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSparkReplSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: StartSparkReplSessionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1797FEA-B7D6-5ED6-A24B-2C8C5F4D7361
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
      data: StartSparkReplSessionResponseBodyData,
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

