// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequestNoticeConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @example
   * true
   */
  failLimitTimes?: number;
  /**
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @example
   * webhook,sms,mail,phone
   */
  sendChannel?: string;
  /**
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @example
   * 90
   */
  timeout?: number;
  /**
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      failLimitTimes: 'FailLimitTimes',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      successNotice: 'SuccessNotice',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      failLimitTimes: 'number',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      successNotice: 'boolean',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

