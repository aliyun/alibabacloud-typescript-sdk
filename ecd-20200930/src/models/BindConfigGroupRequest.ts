// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindConfigGroupRequestResourceInfos extends $dara.Model {
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
   * ecd-1bo4xotjvwyon****
   */
  resourceId?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-hangzhou
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

export class BindConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccg-0chlk9b65lj8z****
   */
  groupId?: string;
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
   * The resource information to associate.
   * 
   * This parameter is required.
   */
  resourceInfos?: BindConfigGroupRequestResourceInfos[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
      resourceInfos: 'ResourceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      regionId: 'string',
      resourceInfos: { 'type': 'array', 'itemType': BindConfigGroupRequestResourceInfos },
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

