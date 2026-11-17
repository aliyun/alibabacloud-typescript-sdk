// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * IP address book
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
   * The Protocol Type supported by the access control policy. Valid values:
   * - **FTP**
   * - **HTTP**
   * - **HTTPS**
   * - **Memcache**
   * - **MongoDB**
   * - **MQTT**
   * - **MySQL**
   * - **RDP**
   * - **Redis**
   * - **SMTP**
   * - **SMTPS**
   * - **SSH**
   * - **SSL_No_Cert**
   * - **SSL**
   * - **VNC**
   * 
   * > The valid values of this parameter depend on the value of the Proto parameter. If Proto is set to TCP, ApplicationNameList supports all the preceding Protocol Types. If both ApplicationNameList and ApplicationName are specified, ApplicationNameList takes precedence.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The port of the application.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The list of reasons why the protocol is not analyzed when the identified protocol is Unknown.
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
   * The categorization of the intelligence tags label. Valid values:
   * 
   * - **Suspicious**: Suspicious.
   * - **Malicious**: Malicious.
   * - **Trusted**: Trusted.
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk assessment level. Valid values:
   * 
   * - **1**: Low risk.
   * - **2**: Medium risk.
   * - **3**: High risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the intelligence tags label.
   * 
   * @example
   * ReleaseLabel
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the intelligence tags label.
   * 
   * @example
   * ReleaseLabel
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the intelligence label sign.
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
   * Specifies whether to overwrite the access control policy. Valid values:
   * 
   * - **Uncovered**: Not covered.
   * 
   * - **FullCoverage**: Covered.
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The recommendation information for the ACL.
   * 
   * @example
   * Allow recommended
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The health status of the access control policy. Valid values:
   * 
   * - **Normal**: Healthy.
   * - **Abnormal**: Unhealthy.
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * The address book information.
   */
  addressGroupList?: DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList[];
  /**
   * @remarks
   * The list of application ports.
   * 
   * > The list displays only the first 99 application ports. If the number of outbound application ports exceeds 99, only the first 99 entries are displayed.
   */
  applicationPortList?: DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList[];
  /**
   * @remarks
   * The total number of assets that initiate outbound connections.
   * 
   * @example
   * 20
   */
  assetCount?: number;
  /**
   * @remarks
   * The categorization of the intelligence tags label. Valid values:
   * 
   * - **Suspicious**: Suspicious.
   * - **Malicious**: Malicious.
   * - **Trusted**: Trusted.
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The category ID of the product. Valid values:
   * 
   * - **Aliyun**: Alibaba Cloud service.
   * 
   * - **NotAliyun**: Non-Alibaba Cloud service.
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The category name of the product. Valid values:
   * 
   * - **Alibaba Cloud service**
   * 
   * - **Non-Alibaba Cloud service**
   * 
   * @example
   * Alibaba Cloud service
   */
  categoryName?: string;
  /**
   * @remarks
   * The destination IP address of the domain name for outbound connections.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The name of the group in the rule.
   * 
   * @example
   * rules_test
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an access control rule exists. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an ACL recommendation is available. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
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
   * Indicates whether the IP address is added to the whitelist. Valid values:
   * - **true**: Added.
   * 
   * - **false**: Not added.
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * Qingdao, Shandong Province
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
   * The total number of private network assets that initiate outbound connections.
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
   * Default rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The security reason.
   * 
   * @example
   * Intelligent policy: The organization to which the destination domain name belongs is Alibaba Cloud Computing Ltd. Its main business is Alibaba Cloud. No security risks are found. It can be used to configure an outbound whitelist.
   */
  securityReason?: string;
  /**
   * @remarks
   * The security policy for the domain name for outbound connections. Valid values:
   * 
   * - **pass**: Allow.
   * 
   * - **alert**: Deny.
   * 
   * - **drop**: Monitor.
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
   * The list of tags.
   */
  tagList?: DescribeOutgoingDestinationIPResponseBodyDstIPListTagList[];
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
   * The list of IP addresses for outbound connections.
   */
  dstIPList?: DescribeOutgoingDestinationIPResponseBodyDstIPList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of outbound IP addresses.
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

