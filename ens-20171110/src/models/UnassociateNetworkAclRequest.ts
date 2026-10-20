// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateNetworkAclRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated resource to disassociate.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the associated resource to disassociate. Valid values:
   * * Network: network.
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

export class UnassociateNetworkAclRequest extends $dara.Model {
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
   * The list of resources to disassociate. Valid values of N: 1 to 30. The resources must be associated with the network ACL by calling the AssociateNetworkAcl operation, and the current association status must be BINDED.
   * 
   * This parameter is required.
   */
  resource?: UnassociateNetworkAclRequestResource[];
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      resource: { 'type': 'array', 'itemType': UnassociateNetworkAclRequestResource },
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

