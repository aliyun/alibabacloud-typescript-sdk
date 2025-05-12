// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesRequestTag } from "./TagResourcesRequestTag";


export class TagResourcesRequest extends $dara.Model {
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
   * The tags that you want to add to the cloud computers. You can specify 1 to 20 tags.
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

