// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesByTagRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * The tag key can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter specifies a filter condition for the query.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
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

export class ListResourcesByTagRequest extends $dara.Model {
  tagFilter?: ListResourcesByTagRequestTagFilter;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   EQUAL: exact match for resources to which the specified tag is added. This is the default value.
   * *   NOT: exact match for resources to which the specified tag is not added.
   * 
   * @example
   * EQUAL
   */
  fuzzyType?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags added to the resources. Valid values:
   * 
   * *   False: does not return the information of tags added to the resources. This is the default value.
   * *   True: returns the information of all tags added to the resources.
   * 
   * @example
   * False
   */
  includeAllTags?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
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
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * *   If you set the FuzzyType parameter to EQUAL, you can set this parameter to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   If you set the FuzzyType parameter to NOT, you can set this parameter to a resource type provided in **Types of resources that support queries based on the NOT operator**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::VPC::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      fuzzyType: 'FuzzyType',
      includeAllTags: 'IncludeAllTags',
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListResourcesByTagRequestTagFilter,
      fuzzyType: 'string',
      includeAllTags: 'boolean',
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

