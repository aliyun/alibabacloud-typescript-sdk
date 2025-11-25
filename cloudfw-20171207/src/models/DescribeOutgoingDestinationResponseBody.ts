// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationResponseBodyDstListTagList extends $dara.Model {
  /**
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @example
   * test
   */
  tagDescribe?: string;
  /**
   * @example
   * FirstFlow
   */
  tagId?: string;
  /**
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
   * @example
   * test
   */
  aclRecommendDetail?: string;
  /**
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @example
   * example.com
   */
  business?: string;
  /**
   * @example
   * AliYun
   */
  categoryId?: string;
  /**
   * @example
   * categor_test
   */
  categoryName?: string;
  /**
   * @example
   * example.com
   */
  dstDomain?: string;
  /**
   * @example
   * 101.6.15.XXX
   */
  dstIP?: string;
  /**
   * @example
   * domain
   */
  dstType?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * false
   */
  hasAclRecommend?: boolean;
  /**
   * @example
   * 0.0
   */
  inBytes?: number;
  /**
   * @example
   * false
   */
  isMarkNormal?: boolean;
  /**
   * @example
   * 0.0
   */
  outBytes?: number;
  /**
   * @example
   * 10
   */
  sessionCount?: number;
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
  dstList?: DescribeOutgoingDestinationResponseBodyDstList[];
  /**
   * @example
   * A2845BA9-1642-5B27-9F04-8014DD94****
   */
  requestId?: string;
  /**
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

