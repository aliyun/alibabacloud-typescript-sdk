// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagValuesRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag value for a fuzzy query.
   * 
   * This parameter is used together with the `FuzzyType` parameter.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListTagValuesRequest extends $dara.Model {
  tagFilter?: ListTagValuesRequestTagFilter;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   EQUAL (default): exact match
   * *   PREFIX: prefix-based fuzzy match
   * 
   * @example
   * EQUAL
   */
  fuzzyType?: string;
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of tag values to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The category of the tags. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   ResourceTag: resource tags, including custom and system tags. This is the default value.
   * *   MetaTag: preset tags.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ResourceTag
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * Format: `ALIYUN::${ProductCode}::${ResourceType}`. All letters in the value of this parameter must be in uppercase.
   * 
   * *   `ProductCode`: the service code. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   `ResourceType`: the resource type. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      fuzzyType: 'FuzzyType',
      key: 'Key',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListTagValuesRequestTagFilter,
      fuzzyType: 'string',
      key: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.tagFilter && typeof (this.tagFilter as any).validate === 'function') {
      (this.tagFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

