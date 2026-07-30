// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindConfigGroupRequestResourceInfos extends $dara.Model {
  /**
   * @remarks
   * The service type of the resource.
   * 
   * Valid value:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * ecd-ctwj0bk3l5nz****
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-chengdu
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * *   RESOURCE_GROUP: the resource group.
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
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

export class UnbindConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-shanghai`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources from which you want to unbind the configuration group.
   * 
   * This parameter is required.
   */
  resourceInfos?: UnbindConfigGroupRequestResourceInfos[];
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * Valid value:
   * 
   * *   Timer: the scheduled task type.
   * 
   * This parameter is required.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceInfos: 'ResourceInfos',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceInfos: { 'type': 'array', 'itemType': UnbindConfigGroupRequestResourceInfos },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceInfos)) {
      $dara.Model.validateArray(this.resourceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

