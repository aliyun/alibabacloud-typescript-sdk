// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the application subcomponent. If you specify this parameter, the whitelist modification takes effect only for this subcomponent.
   * 
   * @example
   * pac-*******************
   */
  componentId?: string;
  /**
   * @remarks
   * The method to modify the whitelist. Valid values:
   * 
   * - **Cover**: Overwrites the original IP address whitelist. This is the default value.
   * 
   * - **Append**: Appends IP addresses.
   * 
   * - **Delete**: Deletes IP addresses.
   * 
   * @example
   * Append
   */
  modifyMode?: string;
  /**
   * @remarks
   * The list of security group IDs. Separate multiple IDs with commas.
   * 
   * @example
   * sg-**************
   */
  securityGroups?: string;
  /**
   * @remarks
   * The name of the IP address group. The default value is `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses for the whitelist. Separate multiple IP addresses with commas.
   * 
   * @example
   * 127.0.0.1,172.17.0.0/24
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      componentId: 'ComponentId',
      modifyMode: 'ModifyMode',
      securityGroups: 'SecurityGroups',
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      componentId: 'string',
      modifyMode: 'string',
      securityGroups: 'string',
      securityIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

