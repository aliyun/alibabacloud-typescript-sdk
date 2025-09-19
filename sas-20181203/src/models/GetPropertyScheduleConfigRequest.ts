// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertyScheduleConfigRequest extends $dara.Model {
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
   * @example
   * scheduler_sca_period
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 50d213b4-3a35-427a-b8a5-04b0c7e1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

