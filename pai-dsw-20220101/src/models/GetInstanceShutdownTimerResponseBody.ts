// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceShutdownTimerResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      remainingTimeInMs: 'RemainingTimeInMs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      remainingTimeInMs: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

