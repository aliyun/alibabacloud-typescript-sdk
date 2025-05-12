// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags from the resource. This parameter takes effect only when TagKey.N is not specified. Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs, which are cloud computer IDs. You can specify 1 to 50 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-ia2zw38bi6cm7****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * * ALIYUN::GWS::INSTANCE: cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::GWS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify 1 to 20 tag keys.
   * 
   * @example
   * TestKey
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

