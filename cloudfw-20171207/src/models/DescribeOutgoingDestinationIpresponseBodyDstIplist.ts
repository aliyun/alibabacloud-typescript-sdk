// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList } from "./DescribeOutgoingDestinationIpresponseBodyDstIplistAddressGroupList";
import { DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList } from "./DescribeOutgoingDestinationIpresponseBodyDstIplistApplicationPortList";
import { DescribeOutgoingDestinationIPResponseBodyDstIPListTagList } from "./DescribeOutgoingDestinationIpresponseBodyDstIplistTagList";


export class DescribeOutgoingDestinationIPResponseBodyDstIPList extends $dara.Model {
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
   * The suggestion to configure an access control policy.
   * 
   * @example
   * Allows the traffic.
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * *   **normal**: healthy
   * *   **Abnormal**: unhealthy
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * The information about the address book.
   */
  addressGroupList?: DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList[];
  /**
   * @remarks
   * The application ports.
   * 
   * >  Only the first 100 application ports are displayed.
   */
  applicationPortList?: DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList[];
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
   * The ID of the service type. Valid values:
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
   * The type of the service to which the destination IP address belongs. Valid values:
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
   * The destination IP addresses in outbound connections.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The name of the group to which the access control policy belongs.
   * 
   * @example
   * Rule_test
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is configured. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is recommended. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 472
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the destination IP address is added to a whitelist. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * Location name.
   * 
   * @example
   * 山东省青岛市
   */
  locationName?: string;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 965
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
   * The UUID of the access control policy.
   * 
   * @example
   * fadsfd-dfadf-df****
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
   * *   **alert**: deny
   * *   **drop**: monitor
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
   * 4
   */
  sessionCount?: number;
  /**
   * @remarks
   * The tags.
   */
  tagList?: DescribeOutgoingDestinationIPResponseBodyDstIPListTagList[];
  /**
   * @remarks
   * The total traffic. Unit: bytes
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
      addressGroupList: 'AddressGroupList',
      applicationPortList: 'ApplicationPortList',
      assetCount: 'AssetCount',
      categoryClassId: 'CategoryClassId',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      dstIP: 'DstIP',
      groupName: 'GroupName',
      hasAcl: 'HasAcl',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      locationName: 'LocationName',
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
      addressGroupList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList },
      applicationPortList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList },
      assetCount: 'number',
      categoryClassId: 'string',
      categoryId: 'string',
      categoryName: 'string',
      dstIP: 'string',
      groupName: 'string',
      hasAcl: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      locationName: 'string',
      outBytes: 'number',
      privateAssetCount: 'number',
      ruleId: 'string',
      ruleName: 'string',
      securityReason: 'string',
      securitySuggest: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListTagList },
      totalBytes: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressGroupList)) {
      $dara.Model.validateArray(this.addressGroupList);
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

