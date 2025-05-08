// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the network.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * this is my first network
   */
  description?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * This parameter is required.
   * 
   * @example
   * n-****
   */
  networkId?: string;
  /**
   * @remarks
   * The name of the network. The name must meet the following requirements:
   * 
   * *   The name must be 2 to 128 characters in length
   * *   It must start with a letter but cannot start with http:// or https://.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * abc
   */
  networkName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkId: 'string',
      networkName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

