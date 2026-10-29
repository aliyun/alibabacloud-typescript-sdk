// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClassicNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the network. You can use the following CIDR blocks or their subsets as the CIDR block of the network:
   * 
   * - 10.0.0.0/8 (default).
   * - 172.16.0.0/12.
   * - 192.168.0.0/16.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the network. The description must meet the following rules:
   * 
   * * It must be 2 to 256 characters in length. It must start with a letter or a Chinese character, and cannot start with http:// or https://.
   * 
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @remarks
   * The edge zone ID of ENS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-xxxx-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the network. The name must meet the following rules:
   * 
   * - It must be 2 to 128 characters in length, and can contain English and Chinese characters.
   * - It must start with an uppercase or lowercase letter or a Chinese character, and cannot start with http:// or https://.
   * - It can contain digits, colons (:), underscores (_), and hyphens (-).
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

