// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomizedListHeadersRequestHeaders extends $dara.Model {
  /**
   * @remarks
   * The display type of the header.
   * 
   * > For the desktop_id_name and office_site_id_name head keys, set the value of this parameter to required. For other header keys, set the value of this parameter to display or hide based on your requirements.
   * 
   * @example
   * display
   */
  displayType?: string;
  /**
   * @remarks
   * The key of the header.
   * 
   * > All header keys of the list must be specified.
   * 
   * Valid values:
   * 
   * *   desktop_id_name: the IDs and names of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   system_data_disk: the system disks and data disks of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   office_site_type: the office network types of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   create_time: the time when the cloud computers are created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ip: the IP addresses of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   spec_system_protocol: the instance types, OSs, and protocol types of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   monitor: the monitoring information of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   assigned_users: the number of end users that are assigned to the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   encryption: indicates whether the cloud computers are encrypted.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   office_site_id_name: the IDs and names of the office networks.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   pay_type: the billing methods of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   tag: the tags that are attached to the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hostname: the hostnames of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   status: the statuses of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   current_user: the current end users of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * pay_type
   */
  headerKey?: string;
  static names(): { [key: string]: string } {
    return {
      displayType: 'DisplayType',
      headerKey: 'HeaderKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayType: 'string',
      headerKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

