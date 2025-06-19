// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDefenseResourceShrinkRequestTag } from "./CreateDefenseResourceShrinkRequestTag";


export class CreateDefenseResourceShrinkRequest extends $dara.Model {
  customHeadersShrink?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"domain\\": \\"zhhclb4test096-05111.test.com\\"}
   */
  detail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-4xl*******
   */
  instanceId?: string;
  /**
   * @example
   * 123221XXX
   */
  ownerUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * abctest.com
   */
  resource?: string;
  resourceGroup?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  tag?: CreateDefenseResourceShrinkRequestTag[];
  /**
   * @example
   * 0
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      customHeadersShrink: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      tag: 'Tag',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeadersShrink: 'string',
      description: 'string',
      detail: 'string',
      instanceId: 'string',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      regionId: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      tag: { 'type': 'array', 'itemType': CreateDefenseResourceShrinkRequestTag },
      xffStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

