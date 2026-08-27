// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource. You can specify up to 20 tag keys.
   * 
   * The length must not exceed 128 characters. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource. You can specify up to 20 tag values.
   * 
   * The length must not exceed 128 characters. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceJoshua
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the tag. You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 7fee80e1-8c48-4c2f-8300-0f6dc40b****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - stack
   * 
   * - stackgroup
   * 
   * - template
   * 
   * - templatescratch: resource scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resources. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

