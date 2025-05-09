// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOutgoingDomainResponseBodyDomainListTagList } from "./DescribeOutgoingDomainResponseBodyDomainListTagList";


export class DescribeOutgoingDomainResponseBodyDomainList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an access control policy is configured. Valid values:
   * 
   * *   **Uncovered**: no
   * *   **FullCoverage**: yes
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The suggestion in an access control policy.
   * 
   * @example
   * Allows the traffic.
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The state of the access control policy. Valid values:
   * 
   * *   **normal**: healthy
   * *   **abnormal**: unhealthy
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
   * The address book for outbound connections
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
   * The outbound asset count.
   * 
   * @example
   * 20
   */
  assetCount?: number;
  /**
   * @remarks
   * The website service.
   * 
   * @example
   * Alibaba Cloud
   */
  business?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Suspicious**
   * *   **Malicious**
   * *   **Trusted**
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The type ID of the service to which the domain name belongs. Valid values:
   * 
   * *   **Aliyun**: Alibaba Cloud services
   * *   **NotAliyun**: third-party services
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The type of the service to which the domain name belongs. Valid values:
   * 
   * *   **Alibaba Cloud services**
   * *   **Third-party services**
   * 
   * @example
   * Alibaba Cloud services
   */
  categoryName?: string;
  /**
   * @remarks
   * The domain name in outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the group to which the access control policy belongs.
   * 
   * @example
   * Group of addresses in outbound connections
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an `access control policy` is configured for the domain name. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is recommended. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The volume of inbound traffic.
   * 
   * @example
   * 3214
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the domain name is marked as normal. Valid values:
   * 
   * *   **true**: normal
   * *   **false**: abnormal
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
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The volume of outbound traffic.
   * 
   * @example
   * 4582
   */
  outBytes?: number;
  /**
   * @remarks
   * The outbound private asset count.
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
   * Default rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The reason why the domain name is secure.
   * 
   * @example
   * Intelligent policy: The destination domain name belongs to Alibaba Cloud Computing Co., Ltd. The domain name mainly provides services for Alibaba Cloud. No security risks are found, and you can add the domain name to the whitelist.
   */
  securityReason?: string;
  /**
   * @remarks
   * The suggestion to handle the traffic of the domain name in outbound connections. Valid values:
   * 
   * *   **pass**: allow
   * *   **alert**: monitor
   * *   **drop**: deny
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
   * An array that consists of tags.
   */
  tagList?: DescribeOutgoingDomainResponseBodyDomainListTagList[];
  /**
   * @remarks
   * The total volume of traffic. Unit: bytes.
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

