// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignWuyingServerPrivateAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of secondary private IP addresses to assign. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the development host.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-bp1234567890abcde
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryPrivateIpAddressCount: 'number',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

