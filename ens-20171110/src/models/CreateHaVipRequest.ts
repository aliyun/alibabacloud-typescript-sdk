// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The number of HAVIPs that you want to create. Valid values: 1 to 10. The value can be only 1 if you specify an IP address.
   * 
   * Default value: 1.
   * 
   * @example
   * 6
   */
  amount?: number;
  /**
   * @remarks
   * The description of the HAVIP.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The IP address of the HAVIP.
   * 
   * @example
   * 120.24.243.91
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the HAVIP.
   * 
   * @example
   * yourName
   */
  name?: string;
  /**
   * @remarks
   * The vSwitch ID of the HAVIP.
   * 
   * @example
   * vsw-5****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      description: 'Description',
      ipAddress: 'IpAddress',
      name: 'Name',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      description: 'string',
      ipAddress: 'string',
      name: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

