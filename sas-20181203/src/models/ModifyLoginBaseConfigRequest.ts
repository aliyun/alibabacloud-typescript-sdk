// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoginBaseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the unusual logon detection rule for the server. This parameter is in JSON format and contains the following fields:
   * 
   * - **totalCount**: the total number of assets.
   * - **uuidCount**: the number of assets on which the rule takes effect.
   * - **id**: the ID of the unusual logon detection rule.
   * - **location**: the name of the common logon location.
   * 
   * > This field is required only when the Type parameter is set to login_common_location.
   * 
   * - **ip**: the common logon IP address.
   * 
   * > This field is required only when the Type parameter is set to login_common_ip.
   * 
   * - **endTime**: the end time of the common logon time range.
   * 
   * > This field is required only when the Type parameter is set to login_common_time.
   * 
   * - **startTime**: the start time of the common logon time range.
   * 
   * > This field is required only when the Type parameter is set to login_common_time.
   * 
   * - **account**: the common logon account.
   * 
   * > This field is required only when the Type parameter is set to login_common_account.
   * 
   * This parameter is required.
   * 
   * @example
   * {"totalCount":174,"uuidCount":4,"location":"黑山","id":0}
   */
  config?: string;
  /**
   * @remarks
   * The configuration of the servers on which the unusual logon detection rule takes effect. This parameter is in JSON format and contains the following fields:
   * 
   * - **Target**: the UUID of the server to add or remove.
   * - **targetType**: the mode for adding assets on which the rule takes effect. Valid values:
   *     - **uuid**: add by individual server.
   *     - **groupId**: add by server group.
   * - **flag**: the operation to perform on the asset. Valid values:
   *     - **del**: remove the server from the rule.
   *     - **add**: add the server to the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"target":"inet-7c676676-06fa-442e-90fb-b802e5d6****","targetType":"uuid","flag":"add"}]
   */
  target?: string;
  /**
   * @remarks
   * The type of unusual logon detection for the server. Valid values:
   * 
   * - **login_common_location**: common logon location.
   * - **login_common_ip**: common logon IP address.
   * - **login_common_time**: common logon time.
   * - **login_common_account**: common logon account.
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

