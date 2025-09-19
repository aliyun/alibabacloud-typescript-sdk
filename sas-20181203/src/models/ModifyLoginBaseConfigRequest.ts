// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoginBaseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the configuration that is used to detect unusual logons to your servers. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **totalCount**: the total number of servers.
   * *   **uuidCount**: the number of servers to which the configuration is applied.
   * *   **id**: the ID of the configuration.
   * *   **location**: the common logon location.
   * 
   * > You must specify this field if the Type parameter is set to login_common_location.
   * 
   * *   **ip**: the common logon IP address.
   * 
   * > You must specify this field if the Type parameter is set to login_common_ip.
   * 
   * *   **endTime**: the end time of the common logon time range.
   * 
   * > You must specify this field if the Type parameter is set to login_common_time.
   * 
   * *   **startTime**: the start time of the common logon time range.
   * 
   * > You must specify this field if the Type parameter is set to login_common_time.
   * 
   * *   **account**: the common logon account.
   * 
   * > You must specify this field if the Type parameter is set to login_common_account.
   * 
   * This parameter is required.
   * 
   * @example
   * {"totalCount":174,"uuidCount":4,"location":"Montenegro","id":0}
   */
  config?: string;
  /**
   * @remarks
   * The details of the server to which the configuration is applied. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **Target**: the UUID of the server.
   * 
   * *   **targetType**: the type of the server to which the configuration is applied. Valid values:
   * 
   *     *   **uuid**: a server
   *     *   **groupId**: a server group
   * 
   * *   **flag**: the operation that you want to perform on the server. Valid values:
   * 
   *     *   **del**: removes the server from the configuration.
   *     *   **add**: adds the server to the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"target":"inet-7c676676-06fa-442e-90fb-b802e5d6****","targetType":"uuid","flag":"add"}]
   */
  target?: string;
  /**
   * @remarks
   * The logon type of the configuration to modify. Valid values:
   * 
   * *   **login_common_location**: common logon location
   * *   **login_common_ip**: common logon IP address
   * *   **login_common_time**: common logon time range
   * *   **login_common_account**: common logon account
   * 
   * This parameter is required.
   * 
   * @example
   * login_common_location
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

