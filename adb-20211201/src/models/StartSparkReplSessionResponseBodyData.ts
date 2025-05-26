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

