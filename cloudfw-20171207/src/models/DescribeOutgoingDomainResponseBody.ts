// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainResponseBodyDomainListApplicationPortList extends $dara.Model {
  /**
   * @remarks
   * The application names.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application port number.
   * 
   * @example
   * 443
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBodyDomainListTagList extends $dara.Model {
  /**
   * @remarks
   * The categorization of the intelligence label. Valid values:
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk assessment level. Valid values:
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * tag-describe
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The intelligence label ID.
   * 
   * @example
   * AliYun
   */
  tagId?: string;
  /**
   * @remarks
   * The tag name.
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
   * Indicates whether the access control policy provides coverage. Valid values:
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The ACL recommendation details.
   * 
   * @example
   * RecommendedRelease
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The health status of the access control policy. Valid values:
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
   * The application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The list of application ports.
   */
  applicationPortList?: DescribeOutgoingDomainResponseBodyDomainListApplicationPortList[];
  /**
   * @remarks
   * The total number of assets with outbound connections.
   * 
   * @example
   * 20
   */
  assetCount?: number;
  /**
   * @remarks
   * The website business.
   * 
   * @example
   * Aliyun
   */
  business?: string;
  /**
   * @remarks
   * The categorization of the intelligence label. Valid values:
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The product category ID. Valid values:
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The category name of the product. Valid values:
   * 
   * @example
   * Alibaba Cloud Product
   */
  categoryName?: string;
  /**
   * @remarks
   * The domain name of the outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The group name of the rule.
   * 
   * @example
   * group-name
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an ACL covers the management of this domain name. Valid values:
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an ACL recommendation exists. Valid values:
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound traffic.
   * 
   * @example
   * 3214
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the outbound domain is marked as normal. Valid values:
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * Alibaba Cloud Computing Limited
   */
  organization?: string;
  /**
   * @remarks
   * The outbound traffic.
   * 
   * @example
   * 4582
   */
  outBytes?: number;
  /**
   * @remarks
   * The total number of private network assets with outbound connections.
   * 
   * @example
   * 20
   */
  privateAssetCount?: number;
  /**
   * @remarks
   * The ACL rule ID.
   * 
   * @example
   * add-dfadf-f****
   */
  ruleId?: string;
  /**
   * @remarks
   * The ACL rule name.
   * 
   * @example
   * acl-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The security reason.
   * 
   * @example
   * Smart policy: The target domain name belongs to Aliyun Computing Co., Ltd., and its main business is Aliyun. No security risks have been found. It can be used to configure an outreach whitelist.
   */
  securityReason?: string;
  /**
   * @remarks
   * The security policy for the Outbound Domain. Valid values:
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
   * The list of tags.
   */
  tagList?: DescribeOutgoingDomainResponseBodyDomainListTagList[];
  /**
   * @remarks
   * The total traffic. Unit: bytes.
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
      applicationPortList: 'ApplicationPortList',
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
      applicationPortList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainListApplicationPortList },
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
    if(Array.isArray(this.applicationPortList)) {
      $dara.Model.validateArray(this.applicationPortList);
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
   * The list of outbound domains.
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
   * The total number of outbound domains.
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

