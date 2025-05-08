// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkRequestTag } from "./CreateNetworkRequestTag";


export class CreateNetworkRequest extends $dara.Model {
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
   * 192.168.0.0/24
   */
  cidrBlock?: string;
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
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-telecom
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
   * abc
   */
  networkName?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateNetworkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkName: 'NetworkName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ensRegionId: 'string',
      networkName: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

