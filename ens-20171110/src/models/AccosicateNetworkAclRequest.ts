// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccosicateNetworkAclRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * - **Network**: network.
   * 
   * **N** ranges from 0 to 29. You can associate up to 30 resources.
   * 
   * This parameter is required.
   * 
   * @example
   * Network
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccosicateNetworkAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-a2do9e413e0sp****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The information about the associated resources.
   * 
   * This parameter is required.
   */
  resource?: AccosicateNetworkAclRequestResource[];
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      resource: { 'type': 'array', 'itemType': AccosicateNetworkAclRequestResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

