// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateResourceShareRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * >  Resources.N.ResourceId and Resources.N.ResourceType must be used in pairs.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * >  Resources.N.ResourceId and Resources.N.ResourceType must be used in pairs.
   * 
   * @example
   * VSwitch
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

export class DisassociateResourceShareRequest extends $dara.Model {
  resourceArns?: string[];
  /**
   * @remarks
   * The owner of the resource share. Valid values:
   * 
   * *   Self: The resource share belongs to the current account. This is the default value. For resource sharing within a resource directory, if you are a resource owner and you want to disassociate resources or principals from a resource share, set this parameter to Self.
   * *   OtherAccounts: The resource share belongs to another account. For resource sharing outside a resource directory, if you are a principal and you want to exit a resource share, set this parameter to OtherAccounts.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: DisassociateResourceShareRequestResources[];
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 172050525300****
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceArns: 'ResourceArns',
      resourceOwner: 'ResourceOwner',
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArns: { 'type': 'array', 'itemType': 'string' },
      resourceOwner: 'string',
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': DisassociateResourceShareRequestResources },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceArns)) {
      $dara.Model.validateArray(this.resourceArns);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

