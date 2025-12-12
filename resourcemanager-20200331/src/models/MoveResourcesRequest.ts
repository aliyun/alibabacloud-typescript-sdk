// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourcesRequestResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-bp1sig0mjktx5ewx1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * vpc
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * vpc
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzmeobk5w****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resources that you want to move.
   * 
   * >  You can move a maximum of 10 resources at a time. If you want to move more than 10 resources, move them in batches.
   * 
   * This parameter is required.
   */
  resources?: MoveResourcesRequestResources[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': MoveResourcesRequestResources },
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

