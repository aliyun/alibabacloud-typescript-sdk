// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPropertyScheduleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The new collection frequency of asset fingerprints. Valid values:
   * 
   * *   **0**: disabled, which indicates that the asset fingerprints are not automatically or periodically collected.
   * *   **1**: collects asset fingerprints once an hour.
   * *   **3**: collects asset fingerprints once every 3 hours.
   * *   **12**: collects asset fingerprints once every 12 hours.
   * *   **24**: collects asset fingerprints once a day.
   * *   **168**: collects asset fingerprints once every 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The type of the asset fingerprints for which you want to modify the collection frequency. Valid values:
   * 
   * *   **scheduler_port_period**: listening port
   * *   **scheduler_process_period**: running process
   * *   **scheduler_account_period**: account
   * *   **scheduler_software_period**: software
   * *   **scheduler_cron_period**: scheduled task
   * *   **scheduler_sca_period**: middleware, database, or web service
   * *   **scheduler_autorun_period**: startup item
   * *   **scheduler_lkm_period**: kernel module
   * *   **scheduler_sca_proxy_period**: website
   * 
   * This parameter is required.
   * 
   * @example
   * scheduler_port_period
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleTime: 'ScheduleTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

