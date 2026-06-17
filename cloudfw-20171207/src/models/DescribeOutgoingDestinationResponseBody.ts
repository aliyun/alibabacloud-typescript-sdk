// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationResponseBodyDstListTagList extends $dara.Model {
  /**
   * @remarks
   * The risk assessment level.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * test
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * FirstFlow
   */
  tagId?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * verify
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationResponseBodyDstList extends $dara.Model {
  /**
   * @remarks
   * The recommended Access Control List (ACL) details.
   * 
   * @example
   * test
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The policy status.
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * The business to which the domain name belongs.
   * 
   * @example
   * example.com
   */
  business?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * AliYun
   */
  categoryId?: string;
  /**
   * @remarks
   * The category name of the service.
   * 
   * @example
   * categor_test
   */
  categoryName?: string;
  /**
   * @remarks
   * The destination domain name.
   * 
   * @example
   * example.com
   */
  dstDomain?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 101.6.15.XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * domain
   */
  dstType?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether a recommended ACL exists.
   * 
   * @example
   * false
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 0.0
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the destination is manually marked as normal.
   * 
   * @example
   * false
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 0.0
   */
  outBytes?: number;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 10
   */
  sessionCount?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tagList?: DescribeOutgoingDestinationResponseBodyDstListTagList[];
  static names(): { [key: string]: string } {
    return {
      aclRecommendDetail: 'AclRecommendDetail',
      aclStatus: 'AclStatus',
      business: 'Business',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      dstDomain: 'DstDomain',
      dstIP: 'DstIP',
      dstType: 'DstType',
      groupName: 'GroupName',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      outBytes: 'OutBytes',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRecommendDetail: 'string',
      aclStatus: 'string',
      business: 'string',
      categoryId: 'string',
      categoryName: 'string',
      dstDomain: 'string',
      dstIP: 'string',
      dstType: 'string',
      groupName: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      outBytes: 'number',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationResponseBodyDstListTagList },
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the destination addresses.
   */
  dstList?: DescribeOutgoingDestinationResponseBodyDstList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2845BA9-1642-5B27-9F04-8014DD94****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dstList: 'DstList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationResponseBodyDstList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dstList)) {
      $dara.Model.validateArray(this.dstList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

