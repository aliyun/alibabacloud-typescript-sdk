// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainResponseBodyDomainListTagList extends $dara.Model {
  /**
   * @remarks
   * The category of the intelligence tag. Valid values:
   * 
   * - **Suspicious**: suspicious
   * 
   * - **Malicious**: malicious
   * 
   * - **Trusted**: trusted
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **1**: low
   * 
   * - **2**: medium
   * 
   * - **3**: high
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * tag-describe
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the intelligence tag.
   * 
   * @example
   * AliYun
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * tag-name
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
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

export class DescribeOutgoingDomainResponseBodyDomainList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an access control policy is configured for the domain. Valid values:
   * 
   * - **Uncovered**: no
   * 
   * - **FullCoverage**: yes
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The recommended action for the access control policy.
   * 
   * @example
   * RecommendedRelease
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The health status of the access control policy. Valid values:
   * 
   * - **Normal**: healthy
   * 
   * - **Abnormal**: unhealthy
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * Outreach Address Book
   */
  addressGroupName?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * fdad-fdafa-dafa-dfa****
   */
  addressGroupUUID?: string;
  /**
   * @remarks
   * An array of application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The total number of assets that initiate outbound connections to the domain.
   * 
   * @example
   * 20
   */
  assetCount?: number;
  /**
   * @remarks
   * The business to which the website belongs.
   * 
   * @example
   * Aliyun
   */
  business?: string;
  /**
   * @remarks
   * The category of the intelligence tag. Valid values:
   * 
   * - **Suspicious**: suspicious
   * 
   * - **Malicious**: malicious
   * 
   * - **Trusted**: trusted
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The ID of the asset category. Valid values:
   * 
   * - **Aliyun**: Alibaba Cloud service
   * 
   * - **NotAliyun**: third-party service
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The name of the asset category. Valid values:
   * 
   * - Alibaba Cloud product
   * 
   * - Non-Alibaba Cloud product
   * 
   * @example
   * Alibaba Cloud product
   */
  categoryName?: string;
  /**
   * @remarks
   * The outbound domain name.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the policy group.
   * 
   * @example
   * group-name
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is configured for the domain name. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether a recommended access control policy exists. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The volume of inbound traffic, in bytes.
   * 
   * @example
   * 3214
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the outbound domain name is marked as normal. Valid values:
   * 
   * - **true**: normal
   * 
   * - **false**: not normal
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Alibaba Cloud Computing Limited
   */
  organization?: string;
  /**
   * @remarks
   * The volume of outbound traffic, in bytes.
   * 
   * @example
   * 4582
   */
  outBytes?: number;
  /**
   * @remarks
   * The total number of assets in a private network that initiate outbound connections to the domain.
   * 
   * @example
   * 20
   */
  privateAssetCount?: number;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * add-dfadf-f****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * acl-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The reason for the security recommendation.
   * 
   * @example
   * Smart policy: The target domain name belongs to Aliyun Computing Co., Ltd., and its main business is Aliyun. No security risks have been found. It can be used to configure an outreach whitelist.
   */
  securityReason?: string;
  /**
   * @remarks
   * The recommended security action for the outbound domain name. Valid values:
   * 
   * - **pass**: allow
   * 
   * - **alert**: monitor
   * 
   * - **drop**: deny
   * 
   * @example
   * pass
   */
  securitySuggest?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 12
   */
  sessionCount?: number;
  /**
   * @remarks
   * An array of tags.
   */
  tagList?: DescribeOutgoingDomainResponseBodyDomainListTagList[];
  /**
   * @remarks
   * The total traffic volume, in bytes.
   * 
   * @example
   * 800
   */
  totalBytes?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      aclRecommendDetail: 'AclRecommendDetail',
      aclStatus: 'AclStatus',
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
      applicationNameList: 'ApplicationNameList',
      assetCount: 'AssetCount',
      business: 'Business',
      categoryClassId: 'CategoryClassId',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      domain: 'Domain',
      groupName: 'GroupName',
      hasAcl: 'HasAcl',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      organization: 'Organization',
      outBytes: 'OutBytes',
      privateAssetCount: 'PrivateAssetCount',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      securityReason: 'SecurityReason',
      securitySuggest: 'SecuritySuggest',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      aclRecommendDetail: 'string',
      aclStatus: 'string',
      addressGroupName: 'string',
      addressGroupUUID: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      assetCount: 'number',
      business: 'string',
      categoryClassId: 'string',
      categoryId: 'string',
      categoryName: 'string',
      domain: 'string',
      groupName: 'string',
      hasAcl: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      organization: 'string',
      outBytes: 'number',
      privateAssetCount: 'number',
      ruleId: 'string',
      ruleName: 'string',
      securityReason: 'string',
      securitySuggest: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainListTagList },
      totalBytes: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of outbound domains.
   */
  domainList?: DescribeOutgoingDomainResponseBodyDomainList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of outbound domains found.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

