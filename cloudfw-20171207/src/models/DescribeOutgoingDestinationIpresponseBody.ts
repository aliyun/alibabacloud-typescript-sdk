// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * IP地址簿
   */
  addressGroupName?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  addressGroupUUID?: string;
  static names(): { [key: string]: string } {
    return {
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressGroupName: 'string',
      addressGroupUUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList extends $dara.Model {
  /**
   * @remarks
   * The application protocol detected for the connection. Valid values:
   * 
   * - **FTP**
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * - **Memcache**
   * 
   * - **MongoDB**
   * 
   * - **MQTT**
   * 
   * - **MySQL**
   * 
   * - **RDP**
   * 
   * - **Redis**
   * 
   * - **SMTP**
   * 
   * - **SMTPS**
   * 
   * - **SSH**
   * 
   * - **SSL_No_Cert**
   * 
   * - **SSL**
   * 
   * - **VNC**
   * 
   * >
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * A list of reasons why the application protocol was not identified.
   */
  unknownReason?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      port: 'Port',
      unknownReason: 'UnknownReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      port: 'number',
      unknownReason: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unknownReason)) {
      $dara.Model.validateArray(this.unknownReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListTagList extends $dara.Model {
  /**
   * @remarks
   * The category of the threat intelligence tag. Valid values:
   * 
   * - **Suspicious**
   * 
   * - **Malicious**
   * 
   * - **Trusted**
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **1**: Low
   * 
   * - **2**: Medium
   * 
   * - **3**: High
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the threat intelligence tag.
   * 
   * @example
   * ReleaseLabel
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the threat intelligence tag.
   * 
   * @example
   * ReleaseLabel
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the threat intelligence tag.
   * 
   * @example
   * ReleaseLabel
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

export class DescribeOutgoingDestinationIPResponseBodyDstIPList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an access control policy is applied. Valid values:
   * 
   * - **Uncovered**: No policy is applied.
   * 
   * - **FullCoverage**: A policy is applied.
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * Details of the ACL recommendation.
   * 
   * @example
   * 建议放行
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The health status of the access control policy. Valid values:
   * 
   * - **Normal**: Healthy.
   * 
   * - **Abnormal**: Unhealthy.
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * A list of address books that contain this destination IP address.
   */
  addressGroupList?: DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList[];
  /**
   * @remarks
   * The list of application ports.
   * 
   * > This response returns a maximum of 99 application ports. If more than 99 ports exist, only the first 99 are returned.
   */
  applicationPortList?: DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList[];
  /**
   * @remarks
   * The total number of assets that initiated outgoing connections to this destination IP.
   * 
   * @example
   * 20
   */
  assetCount?: number;
  /**
   * @remarks
   * The threat intelligence category of the destination IP address. Valid values:
   * 
   * - **Suspicious**
   * 
   * - **Malicious**
   * 
   * - **Trusted**
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The ID of the service category. Valid values:
   * 
   * - **Aliyun**: The destination is an Alibaba Cloud product.
   * 
   * - **NotAliyun**: The destination is a non-Alibaba Cloud product.
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The service category of the destination IP address. Valid values:
   * 
   * - **Alibaba Cloud product**
   * 
   * - **non-Alibaba Cloud product**
   * 
   * @example
   * 阿里云产品
   */
  categoryName?: string;
  /**
   * @remarks
   * The destination IP address of the outgoing connection.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The name of the rule group.
   * 
   * @example
   * rules_test
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an access control rule exists. Valid values:
   * 
   * - **true**: An access control rule exists.
   * 
   * - **false**: No access control rule exists.
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an ACL is recommended. Valid values:
   * 
   * - **true**: An ACL is recommended.
   * 
   * - **false**: No ACL is recommended.
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The total inbound traffic in bytes.
   * 
   * @example
   * 472
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the destination IP address is added to the allowlist. Valid values:
   * 
   * - **true**: The destination IP address is on the allowlist.
   * 
   * - **false**: The destination IP address is not on the allowlist.
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The geographical location of the destination IP address.
   * 
   * @example
   * 山东省青岛市
   */
  locationName?: string;
  /**
   * @remarks
   * The total outbound traffic in bytes.
   * 
   * @example
   * 965
   */
  outBytes?: number;
  /**
   * @remarks
   * The total number of private assets that initiated outgoing connections to this destination IP.
   * 
   * @example
   * 20
   */
  privateAssetCount?: number;
  /**
   * @remarks
   * The UUID of the ACL rule.
   * 
   * @example
   * fadsfd-dfadf-df****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the ACL rule.
   * 
   * @example
   * 默认规则
   */
  ruleName?: string;
  /**
   * @remarks
   * The reason for the security recommendation.
   * 
   * @example
   * 智能策略：该目的域名所属组织为阿里云计算有限公司，主要业务为阿里云，未发现安全风险，可用于配置外联白名单。
   */
  securityReason?: string;
  /**
   * @remarks
   * The recommended security action for the outgoing connection. Valid values:
   * 
   * - **pass**: Allows the connection.
   * 
   * - **alert**: Rejects the connection.
   * 
   * - **drop**: Drops the connection.
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
   * A list of tags associated with the destination IP.
   */
  tagList?: DescribeOutgoingDestinationIPResponseBodyDstIPListTagList[];
  /**
   * @remarks
   * The total traffic volume in bytes.
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

export class DescribeOutgoingDestinationIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of destination IP addresses for outgoing connections.
   */
  dstIPList?: DescribeOutgoingDestinationIPResponseBodyDstIPList[];
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
   * The total number of outgoing IPs.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dstIPList: 'DstIPList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIPList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dstIPList)) {
      $dara.Model.validateArray(this.dstIPList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

