// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourcesRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the resource belongs.
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
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the value from the **Resource type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * You can obtain the value from the **Cloud service code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
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
   * The ID of the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzmeobk5w****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resources to be transferred.
   * 
   * > You can transfer up to 10 resources at a time. To transfer more resources, transfer them in batches.
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

