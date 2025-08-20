// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkReplSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the session is active. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  active?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the cluster.
   * 
   * @example
   * 178157466101****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The attempt ID of the Spark application.
   * 
   * @example
   * s202301061000hz57d797b00002****
   */
  attemptId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Session timed out
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
   * IDEL
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
      active: 'Active',
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
      active: 'string',
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

export class GetSparkReplSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkReplSessionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CE6DF97-AEA4-484F-906F-C407EE3770EB
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
      data: GetSparkReplSessionResponseBodyData,
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

