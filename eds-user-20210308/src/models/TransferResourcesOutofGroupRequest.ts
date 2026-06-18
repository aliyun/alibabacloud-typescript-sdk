// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferResourcesOutofGroupRequestResources extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ecd-1shc5sk0vo****
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

export class TransferResourcesOutofGroupRequest extends $dara.Model {
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
   * rg-66konqltcpx43****
   */
  resourceGroupId?: string;
  resources?: TransferResourcesOutofGroupRequestResources[];
  /**
   * @example
   * rg-hcjo6dugpo1****
   */
  targetResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      platform: 'Platform',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      targetResourceGroupId: 'TargetResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      platform: 'string',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': TransferResourcesOutofGroupRequestResources },
      targetResourceGroupId: 'string',
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

