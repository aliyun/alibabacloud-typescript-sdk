// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Failure alarm switch was turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the No machine alarm available switch was turned on.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The method used to send alerts. Only Short Message Service (SMS) is supported.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * The timeout threshold. Default value: 7200. Unit: seconds.
   * 
   * @example
   * 12300
   */
  timeout?: number;
  /**
   * @remarks
   * Indicates whether the Timeout alarm switch was turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the Timeout termination switch was turned on. The switch is turned off by default.
   * 
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
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

