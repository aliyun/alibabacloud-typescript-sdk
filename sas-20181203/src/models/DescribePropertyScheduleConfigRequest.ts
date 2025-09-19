// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScheduleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset fingerprints. Valid values:
   * 
   * *   **scheduler_port_period**: listening port
   * *   **scheduler_process_period**: running process
   * *   **scheduler_account_period**: account
   * *   **scheduler_software_period**: software
   * *   **scheduler_cron_period**: scheduled task
   * *   **scheduler_sca_period**: middleware
   * *   **scheduler_autorun_period**: startup item
   * *   **scheduler_lkm_period**: kernel module
   * *   **scheduler_sca_proxy_period**: website
   * 
   * This parameter is required.
   * 
   * @example
   * scheduler_autorun_period
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

