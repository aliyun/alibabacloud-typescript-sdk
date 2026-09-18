// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to query. You can specify multiple keys. N is a positive integer.
   * 
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
   * 
   * @example
   * testValue1
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
   * The maximum number of entries to return. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. If this parameter is empty, no more results exist.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. ResourceId and Tag cannot both be empty. At least one of ResourceId.N or (Tag.N.Key, Tag.N.Value) must be specified.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Default value: **instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about instances and tags. ResourceId and Tag cannot both be empty. At least one of ResourceId.N or (Tag.N.Key, Tag.N.Value) must be specified.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
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

