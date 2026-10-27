// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferResourcesIntoGroupRequestResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecd-0jl0dwz61hn59tto****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * DESKTOP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class TransferResourcesIntoGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The WUYING product type.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ckf3cx7isinhk***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resource objects.
   */
  resources?: TransferResourcesIntoGroupRequestResources[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      platform: 'Platform',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      platform: 'string',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': TransferResourcesIntoGroupRequestResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

