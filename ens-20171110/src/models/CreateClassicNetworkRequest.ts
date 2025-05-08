// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClassicNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
   * 
   * *   10.0.0.0/8 (default)
   * *   172.16.0.0/12
   * *   192.168.0.0/16
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the network. The name must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-xxxx-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the network. The name must meet the following requirements:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter but cannot start with http:// or https://.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * example
   */
  networkName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkName: 'NetworkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ensRegionId: 'string',
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

