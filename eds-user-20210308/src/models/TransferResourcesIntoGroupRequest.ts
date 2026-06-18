// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferResourcesIntoGroupRequestResources extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ecd-0jl0dwz61hn59tto****
   */
  resourceId?: string;
  /**
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
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @example
   * rg-ckf3cx7isinhk***
   */
  resourceGroupId?: string;
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

