// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the feature of generating an alert upon a failure is enabled. Valid values:
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the feature of generating an alert when no machine is available for running the job is enabled.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The method that is used to send an alert notification. Only Short Message Service (SMS) is supported.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * The timeout threshold. Unit: seconds. Default value: 7200.
   * 
   * @example
   * 12300
   */
  timeout?: number;
  /**
   * @remarks
   * Indicates whether the feature of generating an alert upon a timeout is enabled. Valid values:
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the feature of stopping job triggering upon a timeout is enabled. By default, the feature is disabled.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * false
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

