// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLoginBaseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the logon security settings to delete. The content varies based on the type of the logon security settings. Valid values:
   * 
   * *   **login_common_ip**: approved logon IP addresses
   * 
   * Example: {"ip":"10.23.23.23"}.
   * 
   * *   **login_common_time**: approved logon time ranges
   * 
   * Example: {"startTime":"06:00:00","endTime":"16:00:00"}.
   * 
   * *   **login_common_account**: approved logon accounts
   * 
   * Example: {"account":"test_account_001"}.
   * 
   * *   **login_common_location**: approved logon locations
   * 
   * Example: {"location":"Shanghai"}.
   * 
   * This parameter is required.
   * 
   * @example
   * {"startTime":"06:00:00","endTime":"16:00:00"}
   */
  config?: string;
  /**
   * @remarks
   * The UUID of the server whose logon security settings you want to delete.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  target?: string;
  /**
   * @remarks
   * The type of the logon security settings to delete. Valid values:
   * 
   * *   **login_common_ip**: approved logon IP addresses
   * *   **login_common_time**: approved logon time ranges
   * *   **login_common_account**: approved logon accounts
   * *   **login_common_location**: approved logon locations
   * 
   * This parameter is required.
   * 
   * @example
   * login_common_time
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      target: 'string',
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

