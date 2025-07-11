// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseResourceRequestTag extends $dara.Model {
  /**
   * @example
   * demoTagKey
   */
  key?: string;
  /**
   * @example
   * TagValue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseResourceRequest extends $dara.Model {
  customHeaders?: string[];
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
  tag?: CreateDefenseResourceRequestTag[];
  /**
   * @example
   * 0
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
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
      customHeaders: { 'type': 'array', 'itemType': 'string' },
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
      tag: { 'type': 'array', 'itemType': CreateDefenseResourceRequestTag },
      xffStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customHeaders)) {
      $dara.Model.validateArray(this.customHeaders);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

