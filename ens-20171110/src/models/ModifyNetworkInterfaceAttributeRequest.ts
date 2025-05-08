// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-5f6533jbifugr5fo***
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the ENI. The name must be 1 to 128 characters in length, The name cannot start with http:// or https://.
   * 
   * @example
   * test-01
   */
  networkInterfaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

