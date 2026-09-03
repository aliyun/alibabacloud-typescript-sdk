// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindConfigGroupRequestResourceInfos extends $dara.Model {
  /**
   * @remarks
   * The product type to which the resource belongs.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The resource ID.
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
   * The resource type.
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
   * The region ID. This operation is not region-specific. Set this parameter to `cn-shanghai`.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The information about the resources to unbind.
   * 
   * This parameter is required.
   */
  resourceInfos?: UnbindConfigGroupRequestResourceInfos[];
  /**
   * @remarks
   * The type of the configuration group to unbind.
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

