// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot set it to an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can set it to an empty string.
   * 
   * A tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * test-val
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first query or if no more results exist. If a next query exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAfj+3fkqd8igM6VLaQjlaYc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. You can specify up to 20 resources.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Currently, Instance resources are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

