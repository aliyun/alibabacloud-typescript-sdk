// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCustomLineRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * INTRANET
   */
  dnsCategory?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   * 
   * This parameter is required.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the custom line.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * GLOBAL
   */
  shareScope?: string;
  static names(): { [key: string]: string } {
    return {
      dnsCategory: 'DnsCategory',
      ipv4s: 'Ipv4s',
      lang: 'Lang',
      name: 'Name',
      shareScope: 'ShareScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsCategory: 'string',
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      name: 'string',
      shareScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 1065001
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointRequest extends $tea.Model {
  /**
   * @remarks
   * The source IP addresses of outbound traffic. You must add two to six source IP addresses.
   * 
   * >  You must add at least two source IP addresses for outbound traffic to ensure high availability. We recommend that you add two IP addresses that reside in different zones. You can add up to six source IP addresses.
   * 
   * This parameter is required.
   */
  ipConfig?: AddResolverEndpointRequestIpConfig[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The endpoint name. The name can be up to 20 characters in length. If the upper limit is exceeded, an error message is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * endpoint-test-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group. The security group rules are applied to the outbound VPC.
   * 
   * >  After you create the outbound endpoint, you cannot change the value of SecurityGroupId. This prevents the forwarding of DNS requests from being interrupted due to misoperations.
   * 
   * This parameter is required.
   * 
   * @example
   * kqlqlqjqqkq
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The outbound VPC ID. All outbound Domain Name System (DNS) requests of the resolver are forwarded by this VPC.
   * 
   * >  After you create the outbound endpoint, you cannot change the value of VpcId. This prevents the forwarding of DNS requests from being interrupted due to misoperations.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-129343jslslsks
   */
  vpcId?: string;
  /**
   * @remarks
   * The region ID of the outbound virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipConfig: { 'type': 'array', 'itemType': AddResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hra0**
   */
  endpointId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32436208-E1AF-4DAB-B3B8-24F5F25B0950
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddResolverEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The outbound endpoint ID. The outbound endpoint is used to forward the DNS requests to the specified destination IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP addresses and ports of the external DNS servers. Enter the IP addresses and ports of the destination servers to which the DNS requests are forwarded. You can enter up to **six** IP addresses and ports. Both private and public IP addresses are supported.
   * 
   * >  If you specify public IP addresses as the IP addresses of the external DNS servers and Elastic Compute Service (ECS) instances in the outbound VPC are not assigned public IP addresses, you need to activate NAT Gateway for the VPC and create and manage SNAT entries on a NAT gateway.
   * 
   * This parameter is required.
   */
  forwardIp?: AddResolverRuleRequestForwardIp[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the forwarding rule. You can name the rule based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the forwarding rule. The parameter value can only be OUTBOUND, which indicates that DNS requests are forwarded to one or more external IP addresses.
   * 
   * >  You cannot change the value of Type after you create the forwarding rule.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  /**
   * @remarks
   * The zone for which you want to forward DNS requests.
   * 
   * >  You cannot change the value of ZoneName after you create the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      type: 'Type',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      forwardIp: { 'type': 'array', 'itemType': AddResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      type: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 725B8BED-901F-480C-BBAC-FA59A18580C1
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddResolverRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserVpcAuthorizationRequest extends $tea.Model {
  /**
   * @remarks
   * The authorization channel. Valid values:
   * 
   * *   AUTH_CODE: A verification code is used for authorization.
   * *   RESOURCE_DIRECTORY: A resource directory is used for authorization.
   * 
   * Default value: AUTH_CODE.
   * 
   * @example
   * AUTH_CODE
   */
  authChannel?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * > 
   * 
   * *   The specified authentication code is used if the value of AuthChannel is left empty or is set to AUTH_CODE.
   * 
   * *   In other cases, a random 6-digit number is used. Example: 123456.
   * 
   * @example
   * 123456
   */
  authCode?: string;
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   CLOUD_PRODUCT: cloud service-related authorization
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * >  You can set an effective scope across accounts only by using an Alibaba Cloud account instead of a RAM user. You can set an effective scope across accounts registered on the same site. For example, you can perform the operation across accounts that are both registered on the Alibaba Cloud China site or Alibaba Cloud international site. You cannot set an effective scope across accounts registered on different sites. For example, you cannot perform the operation across accounts that are separately registered on the Alibaba Cloud China site and Alibaba Cloud international site.
   * 
   * This parameter is required.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      authChannel: 'AuthChannel',
      authCode: 'AuthCode',
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authChannel: 'string',
      authCode: 'string',
      authType: 'string',
      authorizedUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserVpcAuthorizationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserVpcAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserVpcAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserVpcAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The logical location type of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   **NORMAL_ZONE**: the regular module. DNS results are stored in the cache module and DNS requests are sent to the regular module if the DNS requests do not match the DNS records in the cache module. DNS record updates take effect based on the time to live (TTL) value. The regular module does not support DNS resolution over user-defined lines or based on weight values.
   * *   **FAST_ZONE**: the acceleration module. It directly responds to DNS requests with the lowest latency and updates DNS records in real time. The acceleration module supports DNS resolution over user-defined lines or based on weight values.
   * 
   * Default value: **NORMAL_ZONE**.
   * 
   * >  The DNS results returned by the built-in authoritative acceleration module are not stored in the cache module because the built-in authoritative acceleration module is located before the cache module. As a result, you are charged more for DNS requests.
   * 
   * @example
   * FAST_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable the recursive resolution proxy for subdomain names. Valid values:
   * 
   * *   **ZONE**: disables the recursive resolution proxy for subdomain names. In this case, NXDOMAIN is returned if the queried subdomain name does not exist in the zone.
   * *   **RECORD**: enables the recursive resolution proxy for subdomain names. In this case, if the queried subdomain name does not exist in the zone, DNS requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * Default value: **ZONE**.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmykd63gt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the zone to be added.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string;
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dnsGroup: 'DnsGroup',
      lang: 'Lang',
      proxyPattern: 'ProxyPattern',
      resourceGroupId: 'ResourceGroupId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dnsGroup: 'string',
      lang: 'string',
      proxyPattern: 'string',
      resourceGroupId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * 6fc186295683a131f63bb8b0cddc****
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS request source. Valid values:
   * 
   * *   default: the default resolution line. The default line is equivalent to a global line. We recommend that you configure a default line to ensure that a DNS record can be returned if no intelligent line is matched.
   * *   Alibaba Cloud lines: indicate that DNS requests are originated from Alibaba Cloud, including Alibaba Cloud public cloud, Alibaba Finance Cloud, and Alibaba Gov Cloud.
   * *   Custom lines: You can configure custom lines so that Private DNS can return specific IP addresses for DNS requests that are originated from a specific CIDR block.
   * 
   * > 
   * 
   * *   Only built-in authoritative acceleration zones support custom lines.
   * 
   * *   Set Line to default if you want to choose the default line. Set Line to a specific line code if you want to choose an Alibaba Cloud line or a custom line. Example: aliyun_r_cn-beijing-a.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record. Valid values: **1 to 99**. A smaller value indicates a higher priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * en
   */
  remark?: string;
  /**
   * @remarks
   * The hostname. The hostname is the prefix of the subdomain name for the zone. Example: www, @, \\* (used for wildcard DNS resolution), and mail (used for specifying the mail server that receives emails).
   * 
   * For example, if you want to resolve the domain name @.exmaple.com, you must set Rr to @ instead of leaving Rr empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The time to live (TTL) period. Valid values: 5, 30, 60, 3600, 43200, and 86400. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. Valid values:
   * 
   * *   **A**: An A record maps a domain name to an IPv4 address in the dotted decimal notation format.
   * *   **AAAA**: An AAAA record maps a domain name to an IPv6 address.
   * *   **CNAME**: A canonical name (CNAME) record maps a domain name to another domain name.
   * *   **TXT**: A text (TXT) record usually serves as a Sender Policy Framework (SPF) record to prevent email spam. The record value of the TXT record can be up to 255 characters in length.
   * *   **MX**: A mail exchanger (MX) record maps a domain name to the domain name of a mail server.
   * *   **PTR**: A pointer (PTR) record maps an IP address to a domain name.
   * *   **SRV**: A service (SRV) record specifies a server that hosts a specific service. Enter a record value in the format of Priority Weight Port Destination domain name. Separate these items with spaces.
   * 
   * >  Before you add a PTR record, you must configure a reverse lookup zone. For more information, see [Add PTR records](https://help.aliyun.com/document_detail/2592976.html).
   * 
   * This parameter is required.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The record value. You need to enter the record value based on the DNS record type.
   * 
   * This parameter is required.
   * 
   * @example
   * 114.55.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the address. You can set a different weight value for each address. This way, addresses are returned based on the weight values for DNS requests. A weight value must be an integer that ranges from 1 to 100. Default value: 1.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      remark: 'Remark',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      remark: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 429570****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  /**
   * @remarks
   * The VPCs that you want to associate with the forwarding rule.
   */
  vpc?: BindResolverRuleVpcRequestVpc[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
      vpc: { 'type': 'array', 'itemType': BindResolverRuleVpcRequestVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12FE6E98-3885-423E-B18B-88CC17052A31
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindResolverRuleVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindResolverRuleVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The VPCs.
   * 
   * >  If Vpcs is left empty, all VPCs that are associated with the zone are disassociated from the zone.
   */
  vpcs?: BindZoneVpcRequestVpcs[];
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 34d4031b63c527358b710a61346a****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      vpcs: 'Vpcs',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      userClientIp: 'string',
      vpcs: { 'type': 'array', 'itemType': BindZoneVpcRequestVpcs },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindZoneVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindZoneVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeZoneDnsGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 85456erer657cfgfg3437
   */
  clientToken?: string;
  /**
   * @remarks
   * The logical location of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   Normal zone: regular module
   * *   Fast Zone: acceleration module
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * The global ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * e0cff188756b1d4579b25e54b66cb830
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dnsGroup: 'DnsGroup',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dnsGroup: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeZoneDnsGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6F1D541-E7A6-447A-A2B5-9F7A20B2A8FB
   */
  requestId?: string;
  /**
   * @remarks
   * The global ID of the zone.
   * 
   * @example
   * e0cff188756b1d4579b25e54b66cb830
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeZoneDnsGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeZoneDnsGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeZoneDnsGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The name of the zone. This parameter is required.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the zone name can be added. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA29B88F-A571-4123-80D5-768AC2F7F806
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckZoneNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckZoneNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLineRequest extends $tea.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  lineId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineId: 'LineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 520002
   */
  lineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A73F3BD0-B1A8-42A9-A9B6-689BBABC4891
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverEndpointRequest extends $tea.Model {
  /**
   * @remarks
   * The endpoint ID. This ID uniquely identifies the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverEndpointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35134B4A-CEC0-43C8-AAD4-BA54AE3268B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResolverEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C9959BE-3A6A-4803-8DCE-973B42ACD599
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResolverRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVpcAuthorizationRequest extends $tea.Model {
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   NORMAL: cloud service-related authorization
   * 
   * Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVpcAuthorizationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVpcAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserVpcAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserVpcAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * >  If you want to delete a built-in authoritative zone whose effective scope is configured, you must disassociate the zone from the effective scope first.
   * 
   * This parameter is required.
   * 
   * @example
   * 0e41496f12da01311d314f17b801****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E246E023-F2EB-4034-83F7-B13FCF31459C
   */
  requestId?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * 0e41496f12da01311d314f17b801****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 306279****
   */
  recordId?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 306279****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516779348000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The type of operation logs. Valid values:
   * 
   * *   **PV_ZONE**: the logs that record the operations on built-in authoritative zones
   * *   **PV_RECORD**: the logs that record the operations on DNS records
   * *   **RESOLVER_RULE**: the logs that record the operations on forwarding rules
   * *   **CUSTOM_LINE**: the logs that record the operations on user-defined lines
   * *   **RESOLVER_ENDPOINT**: the logs that record the operations on outbound endpoints
   * *   **INBOUND_ENDPOINT**: the logs that record the operations on inbound endpoints
   * *   **CACHE_RESERVE_DOMAIN**: the logs that record the operations on cache retention domain names
   * 
   * >  If you set EntityType to other values, all types of logs are queried.
   * 
   * @example
   * PV_ZONE
   */
  entityType?: string;
  /**
   * @remarks
   * The keyword of the operation or the operation content. Fuzzy search is supported. The value is not case-sensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516779348000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. Valid values:
   * 
   * *   If you set ZoneId to a zone ID, the logs that record the operations on the DNS records of the specified zone are queried.\\
   * 
   * *   If you leave ZoneId empty, the logs that record the operations on all zones and the DNS records of these zones that belong to the current Alibaba Cloud account are queried.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      entityType: 'EntityType',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      entityType: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The operation logs.
   */
  changeLogs?: DescribeChangeLogsResponseBodyChangeLogs;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0FCB52A-D512-41A0-8595-40234EDCFD8B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      changeLogs: 'ChangeLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLogs: DescribeChangeLogsResponseBodyChangeLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChangeLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChangeLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 11271
   */
  lineId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineId: 'LineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the custom line was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the custom line was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the custom line.
   * 
   * @example
   * 260282302749096109
   */
  creator?: string;
  /**
   * @remarks
   * The type of the creator. Valid values:
   * 
   * *   CUSTOM: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other roles
   * 
   * @example
   * CUSTOM
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The role of the creator. Valid values:
   * 
   * *   USER: user
   * *   SYSTEM: system
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 100003
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the custom line was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the custom line was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      ipv4s: 'Ipv4s',
      lineId: 'LineId',
      name: 'Name',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lineId: 'string',
      name: 'string',
      requestId: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomLineInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomLineInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesRequest extends $tea.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The custom lines.
   */
  customLines?: DescribeCustomLinesResponseBodyCustomLines;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      customLines: 'CustomLines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLines: DescribeCustomLinesResponseBodyCustomLines,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The supported language. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * Default value: en-US.
   * 
   * >  AcceptLanguage has a higher priority than Lang.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
   * 
   * >  Lang has a lower priority than AcceptLanguage.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * 
   * *   AUTH: the built-in authoritative module
   * *   FWD: the forward module
   * *   RA: the traffic analysis module
   * 
   * @example
   * AUTH
   */
  scene?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.168.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authorizedUserId: 'AuthorizedUserId',
      lang: 'Lang',
      scene: 'Scene',
      userClientIp: 'UserClientIp',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authorizedUserId: 'number',
      lang: 'string',
      scene: 'string',
      userClientIp: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphRequest extends $tea.Model {
  /**
   * @remarks
   * The business ID. BizId is specified together with BizType.
   * 
   * *   If you set BizType to AUTH_ZONE, set BizId to a zone ID.
   * *   If you set BizType to RESOLVER_RULE, set BizId to the ID of a forwarding rule.
   * 
   * @example
   * b9c93a8954c4098731e863c04302f45a
   */
  bizId?: string;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   RESOLVER_RULE: forwarding rule
   * 
   * @example
   * AUTH_ZONE
   */
  bizType?: string;
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1571673600000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1571587200000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.168.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * >  To query the number of DNS requests for a zone, you can specify ZoneId or BizType and BizId.
   * 
   * @example
   * 29c752a01cd281a20ddcfa****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      endTimestamp: 'EndTimestamp',
      lang: 'Lang',
      startTimestamp: 'StartTimestamp',
      userClientIp: 'UserClientIp',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      endTimestamp: 'number',
      lang: 'string',
      startTimestamp: 'number',
      userClientIp: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the DNS requests.
   */
  requestDetails?: DescribeRequestGraphResponseBodyRequestDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB71815-A421-4E51-8E8D-667F44ABE633
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestDetails: 'RequestDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDetails: DescribeRequestGraphResponseBodyRequestDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRequestGraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRequestGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  resolverRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      lang: 'Lang',
      resolverRegionId: 'ResolverRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      lang: 'string',
      resolverRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried zones.
   */
  availableZones?: DescribeResolverAvailableZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23268E49-0C3E-4A2C-AB70-B4C7D092470B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeResolverAvailableZonesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResolverAvailableZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResolverAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointRequest extends $tea.Model {
  /**
   * @remarks
   * The endpoint ID. This ID uniquely identifies the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2020-07-13 10:45:56
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the endpoint was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608356000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID. This ID uniquely identifies the endpoint.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The configurations of the source IP addresses for outbound traffic.
   */
  ipConfigs?: DescribeResolverEndpointResponseBodyIpConfigs[];
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45020ED9-6319-4CA7-9475-6E8D6446E84F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group. The security group rules are applied to the outbound virtual private cloud (VPC).
   * 
   * @example
   * sg-8vb3sigz86xc-group-****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the endpoint. Valid values:
   * 
   * *   SUCCESS: The endpoint works as expected.
   * *   INIT: The endpoint is being created.
   * *   FAILED: The endpoint failed to be created.
   * *   CHANGE_INIT: The endpoint is being modified.
   * *   CHANGE_FAILED: The endpoint failed to be modified.
   * *   EXCEPTION: The endpoint encountered an exception.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the endpoint was updated.
   * 
   * @example
   * 2020-07-13 10:48:39
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the endpoint was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608519000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The ID of the outbound VPC. All outbound Domain Name System (DNS) requests of the resolver are forwarded by this VPC.
   * 
   * @example
   * vpc-0jl96awrjt75ezglc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the outbound VPC.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The region ID of the outbound VPC.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The name of the region where the outbound VPC resides.
   * 
   * @example
   * HuaBei
   */
  vpcRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ipConfigs: 'IpConfigs',
      name: 'Name',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcRegionName: 'VpcRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      id: 'string',
      ipConfigs: { 'type': 'array', 'itemType': DescribeResolverEndpointResponseBodyIpConfigs },
      name: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcRegionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResolverEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword of the endpoint name, which is used for fuzzy searches.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The state of the endpoint that you want to query. Valid values:
   * 
   * *   SUCCESS: The endpoint works as expected.
   * *   INIT: The endpoint is being created.
   * *   FAILED: The endpoint failed to be created.
   * *   CHANGE_INIT: The endpoint is being modified.
   * *   CHANGE_FAILED: The endpoint failed to be modified.
   * *   EXCEPTION: The endpoint encountered an exception.
   * 
   * >  If you do not specify this parameter, endpoints in all states are returned.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The region ID of the outbound virtual private cloud (VPC).
   * 
   * @example
   * cn-zhangjiakou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The endpoints.
   */
  endpoints?: DescribeResolverEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83D1682B-B69A-4060-9FA8-2907C2A35600
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of endpoints.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpoints },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResolverEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResolverEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The virtual private clouds (VPCs) that are associated with the forwarding rule.
   */
  bindVpcs?: DescribeResolverRuleResponseBodyBindVpcs[];
  /**
   * @remarks
   * The time when the forwarding rule was created.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-test
   */
  endpointName?: string;
  /**
   * @remarks
   * The destination IP addresses.
   */
  forwardIps?: DescribeResolverRuleResponseBodyForwardIps[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * forward rule-test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13D5113B-7E34-407F-A9C1-D96CD2B04277
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the forwarding rule. Valid value:
   * 
   * OUTBOUND: outbound forwarding rule. This type of rule forwards Domain Name System (DNS) requests to one or more external IP addresses.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  /**
   * @remarks
   * The time when the forwarding rule was updated.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The name of the forward zone.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      forwardIps: 'ForwardIps',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyForwardIps },
      id: 'string',
      name: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResolverRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The outbound endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The keyword of the forwarding rule name. Fuzzy search is supported. The value is not case-sensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to return virtual private clouds (VPCs) associated with the forwarding rule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  needDetailAttributes?: boolean;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      keyword: 'Keyword',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      keyword: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A10E03D7-808C-422D-9144-F8586C2E2297
   */
  requestId?: string;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: DescribeResolverRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRules },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResolverRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResolverRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A73F3BD0-B1A8-42A9-A9B6-689BBABC4891
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2254
   */
  totalCount?: number;
  /**
   * @remarks
   * The top three VPCs with the largest number of DNS requests.
   */
  vpcRequestTops?: DescribeStatisticSummaryResponseBodyVpcRequestTops;
  /**
   * @remarks
   * The top three zones with the largest number of DNS requests.
   */
  zoneRequestTops?: DescribeStatisticSummaryResponseBodyZoneRequestTops;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcRequestTops: 'VpcRequestTops',
      zoneRequestTops: 'ZoneRequestTops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcRequestTops: DescribeStatisticSummaryResponseBodyVpcRequestTops,
      zoneRequestTops: DescribeStatisticSummaryResponseBodyZoneRequestTops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStatisticSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStatisticSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * pvtz-test-id-2989149d628c5****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The synchronized regions where the ECS instances are deployed.
   */
  ecsRegions?: DescribeSyncEcsHostTaskResponseBodyEcsRegions;
  /**
   * @remarks
   * The synchronized region IDs of the ECS instances.
   */
  regions?: DescribeSyncEcsHostTaskResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether hostname automatic synchronization is enabled. Valid values:
   * 
   * *   ON: Hostname automatic synchronization is enabled. After this feature is enabled, the system automatically reads the hostnames of the Elastic Compute Service (ECS) instances in the specified regions and updates Domain Name System (DNS) records at an interval of 1 minute.
   * *   OFF: Hostname automatic synchronization is disabled.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the task was successful. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * pvtz-test-id-2989149d628c56****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsRegions: 'EcsRegions',
      regions: 'Regions',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsRegions: DescribeSyncEcsHostTaskResponseBodyEcsRegions,
      regions: DescribeSyncEcsHostTaskResponseBodyRegions,
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSyncEcsHostTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSyncEcsHostTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum number: 1. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type. Valid value: ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9EA7F720-B7C0-45C1-9CF4-B6A5A1179B68
   */
  requestId?: string;
  /**
   * @remarks
   * The tags added to the resources.
   */
  tags?: DescribeTagsResponseBodyTags[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tags: 'Tags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserServiceStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserServiceStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99626905-678A-4E8A-984E-6AEB09993996
   */
  requestId?: string;
  /**
   * @remarks
   * Current user\\"s service status:
   * 
   * *  **CLOSED**: Not activated
   * *  **OPENED**: Activated
   * *  **IN_DEBT**: Overdue payment
   * *  **IN_DEBT_OVER_DUE**: Payment overdue
   * 
   * @example
   * OPENED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsRequest extends $tea.Model {
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   CLOUD_PRODUCT: cloud service-related authorization
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5
   */
  totalPages?: number;
  /**
   * @remarks
   * The Alibaba Cloud accounts to which the permissions on the resources are granted.
   */
  users?: DescribeUserVpcAuthorizationsResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
      users: { 'type': 'array', 'itemType': DescribeUserVpcAuthorizationsResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserVpcAuthorizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserVpcAuthorizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The VPCs associated with the zone.
   */
  bindVpcs?: DescribeZoneInfoResponseBodyBindVpcs;
  /**
   * @remarks
   * The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the zone.
   * 
   * @example
   * 141339776561****
   */
  creator?: string;
  /**
   * @remarks
   * The type of the creator.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The logical location type of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   **NORMAL_ZONE**: regular module
   * *   **FAST_ZONE**: acceleration module
   * 
   * @example
   * FAST_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * Indicates whether the zone is being removed to another logical location. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPtr?: boolean;
  /**
   * @remarks
   * Indicates whether the recursive resolution proxy for subdomain names is enabled. Valid values:
   * 
   * *   ZONE: The recursive resolution proxy for subdomain names is disabled. In this case, NXDOMAIN is returned if the queried domain name does not exist in the zone.
   * *   RECORD: The recursive resolution proxy for subdomain names is enabled. In this case, if the queried domain name does not exist in the zone, DNS requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The total number of DNS records added in the zone.
   * 
   * @example
   * 2
   */
  recordCount?: number;
  /**
   * @remarks
   * The description of the zone.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F73F41A3-B6DD-42CA-A793-FFF93277835D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-acfmykd63gt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone. Valid values:
   * 
   * *   **true**: The secondary DNS feature is enabled.
   * *   **false**: The secondary DNS feature is disabled.
   * 
   * @example
   * true
   */
  slaveDns?: boolean;
  /**
   * @remarks
   * The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * zone-test.cn
   */
  zoneName?: string;
  /**
   * @remarks
   * The tag added to the zone.
   * 
   * @example
   * pvtz
   */
  zoneTag?: string;
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   **AUTH_ZONE**: authoritative zone
   * *   **CLOUD_PRODUCT_ZONE**: authoritative zone for cloud services
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDns: 'SlaveDns',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: DescribeZoneInfoResponseBodyBindVpcs,
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDns: 'boolean',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZoneInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 5808
   */
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the DNS record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the DNS record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 5808
   */
  recordId?: number;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * test record
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   **ENABLE**: The DNS record is enabled.
   * *   **DISABLE**: The DNS record is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The time to live (TTL) of the DNS record.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 127.0.0.1
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the DNS record.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * CAgICA1OA_58
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      requestId: 'RequestId',
      rr: 'Rr',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      remark: 'string',
      requestId: 'string',
      rr: 'string',
      status: 'string',
      ttl: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword of the hostname. The value is not case-sensitive. You can set SearchMode to LIKE or EXACT. The default value of SearchMode is EXACT.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * *   **LIKE**: fuzzy search
   * *   **EXACT** (default): exact search
   * 
   * The value of Keyword is the search scope.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The tag added to the DNS record. Valid values:
   * 
   * *   ecs: If you set Tag to ecs, the DNS records added to the hostnames of Elastic Compute Service (ECS) instances in the zone are queried.
   * *   If Tag is left empty, the DNS records in the zone are queried.
   * 
   * @example
   * ecs
   */
  tag?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * a96d70eb4ab8ef01503dc5486914****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      tag: 'Tag',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      tag: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The DNS records.
   */
  records?: DescribeZoneRecordsResponseBodyRecords;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B07FBC3-3A53-4939-A3C6-2BDFE407BAB2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: DescribeZoneRecordsResponseBodyRecords,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZoneRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZoneRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B07FBC3-3A53-4939-A3C6-2BDFE407BAB2
   */
  requestId?: string;
  /**
   * @remarks
   * The zones.
   */
  zones?: DescribeZoneVpcTreeResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZoneVpcTreeResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZoneVpcTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZoneVpcTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword of the zone name. The value is not case-sensitive. You can set SearchMode to LIKE or EXACT. The default value of SearchMode is LIKE.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC) associated with the zone.
   * 
   * @example
   * cn-hangzhou
   */
  queryRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the zone.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  queryVpcId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-aekz2qj7awz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the zone.
   */
  resourceTag?: DescribeZonesRequestResourceTag[];
  /**
   * @remarks
   * The search mode. The value of Keyword is the search scope. Valid values:
   * 
   * *   **LIKE** (default): fuzzy search
   * *   **EXACT**: exact search
   * 
   * Default value: **LIKE**.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The types of cloud services.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string[];
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   **AUTH_ZONE**: authoritative zone
   * *   **CLOUD_PRODUCT_ZONE**: authoritative zone for cloud services
   * 
   * Default value: **AUTH_ZONE**.
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryRegionId: 'QueryRegionId',
      queryVpcId: 'QueryVpcId',
      resourceGroupId: 'ResourceGroupId',
      resourceTag: 'ResourceTag',
      searchMode: 'SearchMode',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryRegionId: 'string',
      queryVpcId: 'string',
      resourceGroupId: 'string',
      resourceTag: { 'type': 'array', 'itemType': DescribeZonesRequestResourceTag },
      searchMode: 'string',
      zoneTag: { 'type': 'array', 'itemType': 'string' },
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 3
   */
  totalPages?: number;
  /**
   * @remarks
   * The zones.
   */
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 23423****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs, which are zone IDs. You can specify up to 50 zone IDs.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738dcc38
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid value: ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 200. Default value: 20.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The tags added to the resources.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      size: 'Size',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * 23423****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * The tags added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekz2qj7awz****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d4****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1324D48-1E23-4AEF-9EDE-466120561C6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range during which the custom lines are created to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518234
   */
  createTimestampEnd?: number;
  /**
   * @remarks
   * The beginning of the time range during which the custom lines are created to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518123
   */
  createTimestampStart?: number;
  /**
   * @remarks
   * The IDs of the creators for the custom lines.
   */
  creator?: string[];
  /**
   * @remarks
   * The IPv4 address.
   * 
   * @example
   * 1.1.1.1
   */
  ipv4?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The end of the time range during which the custom lines are updated to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518000
   */
  updateTimestampEnd?: number;
  /**
   * @remarks
   * The beginning of the time range during which the custom lines are updated to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136515000
   */
  updateTimestampStart?: number;
  static names(): { [key: string]: string } {
    return {
      createTimestampEnd: 'CreateTimestampEnd',
      createTimestampStart: 'CreateTimestampStart',
      creator: 'Creator',
      ipv4: 'Ipv4',
      lang: 'Lang',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      updateTimestampEnd: 'UpdateTimestampEnd',
      updateTimestampStart: 'UpdateTimestampStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestampEnd: 'number',
      createTimestampStart: 'number',
      creator: { 'type': 'array', 'itemType': 'string' },
      ipv4: 'string',
      lang: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      updateTimestampEnd: 'number',
      updateTimestampStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The custom lines.
   */
  customLines?: SearchCustomLinesResponseBodyCustomLines;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      customLines: 'CustomLines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLines: SearchCustomLinesResponseBodyCustomLines,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchCustomLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchCustomLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable the recursive resolution proxy for subdomain names. Valid values:
   * 
   * *   **ZONE**: disables the recursive resolution proxy for subdomain names. In this case, NXDOMAIN is returned if the queried subdomain name does not exist in the zone.
   * *   **RECORD**: enables the recursive resolution proxy for subdomain names. In this case, if the queried domain name does not exist in the zone, Domain Name System (DNS) requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 10.61.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      proxyPattern: 'ProxyPattern',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      proxyPattern: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6F1D541-E7A6-447A-A2B5-9F7A20B2A8FB
   */
  requestId?: string;
  /**
   * @remarks
   * The global ID of the zone.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetProxyPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetProxyPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 207541****
   */
  recordId?: number;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   ENABLE: enables the DNS record.
   * *   DISABLE: suspends the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * DISABLE
   */
  status?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      status: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 207541****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39CB16E5-4180-49F2-A060-23C0ECEB80D9
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   ENABLE: The DNS record is enabled.
   * *   DISABLE: The DNS record is disabled.
   * 
   * @example
   * DISABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetZoneRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetZoneRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to replace the original tags added to the resources. Valid values:
   * 
   * *   True: replaces the original tags.
   * *   False (default): appends the specified one or more tags to the original tags. If a new tag has the same key but a different value from an original tag, the new tag replaces the original tag.
   * 
   * @example
   * true
   */
  overWrite?: boolean;
  /**
   * @remarks
   * The resource IDs, which are zone IDs. You can specify up to 50 zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738dcc38
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid value: ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the resources.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      overWrite: 'OverWrite',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      overWrite: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags of the specified zones. Valid values:
   * 
   * *   true: removes all tags of the specified zones.
   * *   false: removes only the tags with the specified tag keys.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The resource IDs, which are zone IDs. You can specify up to 50 zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738dcc38
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. The value of ResourceType can only be ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of tags that you want to remove. You can specify up to 20 tag keys.
   * 
   * @example
   * env
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      lang: 'Lang',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      lang: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineRequest extends $tea.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   * 
   * This parameter is required.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 100003
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4s: 'Ipv4s',
      lang: 'Lang',
      lineId: 'LineId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      lineId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 765001
   */
  lineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 202991****
   */
  recordId?: number;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * test record
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 202991****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRecordRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverEndpointRequest extends $tea.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The source IP addresses of outbound traffic. You can add two to six IP addresses.
   * 
   * >  You must add at least two source IP addresses for outbound traffic to ensure high availability. We recommend that you add two IP addresses that reside in different zones. You can add up to six source IP addresses.
   */
  ipConfig?: UpdateResolverEndpointRequestIpConfig[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-test-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      ipConfig: { 'type': 'array', 'itemType': UpdateResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverEndpointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC0BDA3A-A92A-4AC8-B351-322A9C79D5C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResolverEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP addresses and ports of the external Domain Name System (DNS) servers. Enter the IP addresses and ports of the destination servers to which the DNS requests are forwarded. You can enter up to six IP addresses and ports. Both private and public IP addresses are supported.
   * 
   * >  If you specify public IP addresses as the IP addresses of the external DNS servers and Elastic Compute Service (ECS) instances in the outbound virtual private cloud (VPC) are not assigned public IP addresses, you need to activate NAT Gateway for the VPC and create and manage SNAT entries on a NAT gateway.
   */
  forwardIp?: UpdateResolverRuleRequestForwardIp[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * forward rule-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      forwardIp: { 'type': 'array', 'itemType': UpdateResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C9959BE-3A6A-4803-8DCE-973B42ACD599
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResolverRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The regions to be synchronized.
   * 
   * This parameter is required.
   */
  region?: UpdateSyncEcsHostTaskRequestRegion[];
  /**
   * @remarks
   * The state of the hostname synchronization task. Valid values:
   * 
   * *   ON: The task is started.
   * *   OFF: The task is ended.
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      region: 'Region',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      region: { 'type': 'array', 'itemType': UpdateSyncEcsHostTaskRequestRegion },
      status: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * test-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSyncEcsHostTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSyncEcsHostTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The resolution line. Default value: default.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the MX record. You can set priorities for different email servers. Valid values: 1 to 99. A smaller value indicates a higher priority.
   * 
   * >  This parameter is required if the type of the DNS record is MX.
   * 
   * @example
   * 60
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record. You can call the DescribeZoneRecords operation to query a list of DNS records.
   * 
   * This parameter is required.
   * 
   * @example
   * 172223****
   */
  recordId?: number;
  /**
   * @remarks
   * The hostname. The hostname is the prefix of the subdomain name for zone. Example: www, @, \\* (used for wildcard DNS resolution), and mail (used for specifying the mail server that receives emails).
   * 
   * For example, if you want to resolve the domain name @.exmaple.com, you must set Rr to @ instead of leaving Rr empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The TTL period. Valid values: 5, 30, 60, 3600, 43200, and 86400. Unit: seconds.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. Valid values:
   * 
   * *   **A**: An A record maps a domain name to an IPv4 address in the dotted decimal notation format.
   * *   **AAAA**: An AAAA record maps a domain name to an IPv6 address.
   * *   **CNAME**: A canonical name (CNAME) record maps a domain name to another domain name.
   * *   **TXT**: A text (TXT) record usually serves as a Sender Policy Framework (SPF) record to prevent email spam. The record value of the TXT record can be up to 255 characters in length.
   * *   **MX**: A mail exchanger (MX) record maps a domain name to the domain name of a mail server.
   * *   **PTR**: A pointer (PTR) record maps an IP address to a domain name.
   * *   **SRV**: A service (SRV) record specifies a server that hosts a specific service. Enter a record value in the format of Priority Weight Port Destination domain name. Separate these items with spaces.
   * 
   * >  Before you add a PTR record, you must configure a reverse lookup zone. For more information, see [Add PTR records](https://help.aliyun.com/document_detail/2592976.html).
   * 
   * This parameter is required.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The record value. You need to enter the record value based on the DNS record type.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.16.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the address. You can set a different weight value for each address. This way, addresses are returned based on the weight values for DNS requests. A weight value must be an integer that ranges from 1 to 100.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 172223****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 250E2C38-D0AD-4518-851D-1C1055805F82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The new description. If you leave Remark empty, the zone has no description.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      remark: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6F1D541-E7A6-447A-A2B5-9F7A20B2A8FB
   */
  requestId?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateZoneRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateZoneRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointRequestIpConfig extends $tea.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block. If you leave this parameter empty, the system automatically allocates an IP address.
   * 
   * @example
   * 172.16.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sjqkql
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequestForwardIp extends $tea.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * >  The following CIDR blocks are reserved by the system: 100.100.2.136 to 100.100.2.138 and 100.100.2.116 to 100.100.2.118. You cannot specify the IP addresses within these CIDR blocks for the external DNS servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination server.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcRequestVpc extends $tea.Model {
  /**
   * @remarks
   * The region ID of the outbound VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequestVpcs extends $tea.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC ID. If the zone is already associated with VPCs and you do not specify this parameter, the associated VPCs are disassociated from the zone.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   **STANDARD**: standard VPC
   * *   **EDS**: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBodyChangeLogsChangeLog extends $tea.Model {
  /**
   * @remarks
   * The operation content.
   * 
   * @example
   * Add RR:test.03 Type:A Line:default TTL:300 Value:172.20.XX.XX
   */
  content?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 141339776561****
   */
  creatorId?: string;
  /**
   * @remarks
   * The subtype of the operator. Valid values:
   * 
   * *   CUSTOMER: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other types
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The operator type. No value or **USER** is returned for this parameter.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  creatorUserId?: string;
  /**
   * @remarks
   * The unique ID of the zone, user-defined line, forwarding rule, outbound endpoint, or inbound endpoint.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the object on which the operation was performed, such as the domain name, user-defined line, cache retention domain name, forwarding rule, outbound endpoint, or inbound endpoint.
   * 
   * @example
   * test-api.com
   */
  entityName?: string;
  /**
   * @remarks
   * The ID of the operation log.
   * 
   * @example
   * 90761578646770****
   */
  id?: number;
  /**
   * @remarks
   * The specific operation performed on the object, such as adding, deleting, modifying, or associating the object.
   * 
   * @example
   * add
   */
  operAction?: string;
  /**
   * @remarks
   * The public IP address of the operator terminal. If the IP address of the operator terminal is a private IP address, the value of this parameter is the public IP address to which the private IP address is mapped after network address translation (NAT).
   * 
   * @example
   * 192.0.XX.XX
   */
  operIp?: string;
  /**
   * @remarks
   * The type of the object on which the operation was performed. Valid values:
   * 
   * *   **PV_ZONE**: the built-in authoritative zone
   * *   **PV_RECORD**: the DNS record
   * *   **RESOLVER_RULE**: the forwarding rule
   * *   **CUSTOM_LINE**: the user-defined line
   * *   **RESOLVER_ENDPOINT**: the outbound endpoint
   * *   **INBOUND_ENDPOINT**: the inbound endpoint
   * *   **CACHE_RESERVE_DOMAIN**: the cache retention domain name
   * 
   * @example
   * PV_ZONE
   */
  operObject?: string;
  /**
   * @remarks
   * The time when the operation is performed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T07:35Z
   */
  operTime?: string;
  /**
   * @remarks
   * The time when the operation was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516779348000
   */
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      creatorUserId: 'CreatorUserId',
      entityId: 'EntityId',
      entityName: 'EntityName',
      id: 'Id',
      operAction: 'OperAction',
      operIp: 'OperIp',
      operObject: 'OperObject',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creatorId: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      creatorUserId: 'string',
      entityId: 'string',
      entityName: 'string',
      id: 'number',
      operAction: 'string',
      operIp: 'string',
      operObject: 'string',
      operTime: 'string',
      operTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBodyChangeLogs extends $tea.Model {
  changeLog?: DescribeChangeLogsResponseBodyChangeLogsChangeLog[];
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: { 'type': 'array', 'itemType': DescribeChangeLogsResponseBodyChangeLogsChangeLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBodyCustomLinesCustomLineIpv4s extends $tea.Model {
  ipv4?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBodyCustomLinesCustomLine extends $tea.Model {
  /**
   * @remarks
   * The time when the custom line was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-25T08:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the custom line was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1671174074000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the custom line.
   * 
   * @example
   * 21312421
   */
  creator?: string;
  /**
   * @remarks
   * The type of the creator for the custom line. Valid values:
   * 
   * *   CUSTOM: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other roles
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The role of the creator for the custom line. Valid values:
   * 
   * *   USER: user
   * *   SYSTEM: system
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   */
  ipv4s?: DescribeCustomLinesResponseBodyCustomLinesCustomLineIpv4s;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 160002
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The time when the custom line was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-08-24T16:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the custom line was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1681879029000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      ipv4s: 'Ipv4s',
      lineId: 'LineId',
      name: 'Name',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      ipv4s: DescribeCustomLinesResponseBodyCustomLinesCustomLineIpv4s,
      lineId: 'string',
      name: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBodyCustomLines extends $tea.Model {
  customLine?: DescribeCustomLinesResponseBodyCustomLinesCustomLine[];
  static names(): { [key: string]: string } {
    return {
      customLine: 'CustomLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLine: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLinesCustomLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  /**
   * @remarks
   * The display name of the region, which varies based on the current language.
   * 
   * @example
   * China (Beijing)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the service in the region.
   * 
   * @example
   * pvtz.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Beijing)
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop extends $tea.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 103
   */
  requestCount?: number;
  /**
   * @remarks
   * The time when the data was collected. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-21T10:00Z
   */
  time?: string;
  /**
   * @remarks
   * The time when the data was collected. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1571652000000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      requestCount: 'RequestCount',
      time: 'Time',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCount: 'number',
      time: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBodyRequestDetails extends $tea.Model {
  zoneRequestTop?: DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponseBodyAvailableZones extends $tea.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The state of resources in the zone. Valid values:
   * 
   * *   NORMAL: The resources are in the normal state.
   * *   SOLD_OUT: The resources are sold out.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointResponseBodyIpConfigs extends $tea.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-hangzhou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block. If this parameter is left empty, the system automatically allocates an IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jlgeyq4oazkh5xue****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBodyEndpointsIpConfigs extends $tea.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jlgeyq4oazkh5xue****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBodyEndpoints extends $tea.Model {
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2020-07-13 10:36:26
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the endpoint was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594607786000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The source IP addresses of outbound traffic.
   */
  ipConfigs?: DescribeResolverEndpointsResponseBodyEndpointsIpConfigs[];
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * endpoint-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-0jld3m9yq7l2cw12****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the endpoint that you queried. Valid values:
   * 
   * *   SUCCESS: The endpoint works as expected.
   * *   INIT: The endpoint is being created.
   * *   FAILED: The endpoint failed to be created.
   * *   CHANGE_INIT: The endpoint is being modified.
   * *   CHANGE_FAILED: The endpoint failed to be modified.
   * *   EXCEPTION: The endpoint encountered an exception.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the endpoint was updated.
   * 
   * @example
   * 2020-07-13 10:38:24
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the endpoint was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594607904000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The ID of the outbound VPC. All outbound Domain Name System (DNS) requests of the resolver are forwarded by this VPC.
   * 
   * @example
   * vpc-0jlxhpfnj5bfu0bsd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the outbound VPC.
   * 
   * @example
   * vpc-test-name
   */
  vpcName?: string;
  /**
   * @remarks
   * The region ID of the outbound VPC.
   * 
   * @example
   * cn-zhangjiakou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The name of the region where the VPC resides.
   * 
   * @example
   * China East 1 (Hangzhou)
   */
  vpcRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ipConfigs: 'IpConfigs',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcRegionName: 'VpcRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      id: 'string',
      ipConfigs: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpointsIpConfigs },
      name: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcRegionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponseBodyBindVpcs extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  /**
   * @remarks
   * The ID of the user to which the VPC belongs.
   * 
   * @example
   * 32454****
   */
  vpcUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponseBodyForwardIps extends $tea.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesBindVpcs extends $tea.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region to which the VPC belongs.
   * 
   * @example
   * ap-southeast-1
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID. This ID uniquely identifies the VPC.
   * 
   * @example
   * vpc-0jl96awrjt75ezglc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  /**
   * @remarks
   * The user ID to which the VPC belongs.
   * 
   * @example
   * 141339776561****
   */
  vpcUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesForwardIps extends $tea.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination server.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRules extends $tea.Model {
  /**
   * @remarks
   * The VPCs associated with the forwarding rule.
   */
  bindVpcs?: DescribeResolverRulesResponseBodyRulesBindVpcs[];
  /**
   * @remarks
   * The time when the forwarding was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-test
   */
  endpointName?: string;
  /**
   * @remarks
   * The IP addresses and ports of the external DNS servers. Enter the IP addresses and ports of the destination servers to which the DNS requests are forwarded.
   */
  forwardIps?: DescribeResolverRulesResponseBodyRulesForwardIps[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * forward rule-test
   */
  name?: string;
  /**
   * @remarks
   * The type of the forwarding rule.
   * 
   * The parameter value can only be OUTBOUND, which indicates that Domain Name System (DNS) requests are forwarded to one or more external IP addresses.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  /**
   * @remarks
   * The time when the forwarding rule was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The zone for which you want to forward DNS requests.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      forwardIps: 'ForwardIps',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesForwardIps },
      id: 'string',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * 华北 2
   */
  regionName?: string;
  /**
   * @remarks
   * The number of DNS requests on the previous day.
   * 
   * @example
   * 2254
   */
  requestCount?: number;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-7h33lkqfuhgnyy****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      requestCount: 'RequestCount',
      tunnelId: 'TunnelId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      requestCount: 'number',
      tunnelId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyVpcRequestTops extends $tea.Model {
  vpcRequestTop?: DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop[];
  static names(): { [key: string]: string } {
    return {
      vpcRequestTop: 'VpcRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop extends $tea.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   RESOLVER_RULE: forwarding rule
   * *   INBOUND: inbound endpoint
   * 
   * @example
   * AUTH_ZONE
   */
  bizType?: string;
  /**
   * @remarks
   * The number of DNS requests on the previous day.
   * 
   * @example
   * 2251
   */
  requestCount?: number;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * test.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      requestCount: 'RequestCount',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      requestCount: 'number',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTops extends $tea.Model {
  zoneRequestTop?: DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds extends $tea.Model {
  regionId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion extends $tea.Model {
  /**
   * @remarks
   * The synchronized region IDs.
   */
  regionIds?: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds;
  /**
   * @remarks
   * The user ID to which the region belongs. This parameter is used in cross-account synchronization scenarios.
   * 
   * @example
   * 141339776561****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionIds: 'RegionIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIds: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds,
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyEcsRegions extends $tea.Model {
  ecsRegion?: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion[];
  static names(): { [key: string]: string } {
    return {
      ecsRegion: 'EcsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsRegion: { 'type': 'array', 'itemType': DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyRegions extends $tea.Model {
  regionId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The values of tags added to the resources.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponseBodyUsers extends $tea.Model {
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   CLOUD_PRODUCT: cloud service-related authorization
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * alidn****@test.com
   */
  authorizedAliyunId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The time when the authorization was performed. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-08T02:31Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the authorization was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672740294000
   */
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedAliyunId: 'AuthorizedAliyunId',
      authorizedUserId: 'AuthorizedUserId',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedAliyunId: 'string',
      authorizedUserId: 'number',
      createTime: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcsVpc extends $tea.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the VPC resides.
   * 
   * @example
   * China (Heyuan)
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID. This ID uniquely identifies the VPC.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * vpc_test
   */
  vpcName?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  /**
   * @remarks
   * The user ID to which the VPC belongs. If null is returned, the VPC belongs to the current user.
   * 
   * @example
   * 141339776561****
   */
  vpcUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcs extends $tea.Model {
  vpc?: DescribeZoneInfoResponseBodyBindVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBodyRecordsRecord extends $tea.Model {
  /**
   * @remarks
   * The time when the DNS record was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-14T03:47Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the DNS record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672740294000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 246959****
   */
  recordId?: number;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   ENABLE: The DNS record is enabled.
   * *   DISABLE: The DNS record is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The time to live (TTL) period.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. Valid values:
   * 
   * *   **A**: An A record points a domain name to an IPv4 address.
   * *   **AAAA**: An AAAA record points a domain name to an IPv6 address.
   * *   **CNAME**: A canonical name (CNAME) record points a domain name to another domain name.
   * *   **TXT**: A text (TXT) record usually serves as a Sender Policy Framework (SPF) record to prevent email spam. The record value of the TXT record can be up to 255 characters in length.
   * *   **MX**: A mail exchanger (MX) record points a domain name to a mail server address.
   * *   **PTR**: A pointer (PTR) points an IP address to a domain name.
   * *   **SRV**: A service (SRV) record specifies a server that hosts a specific service.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-08T02:31Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1654777678000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 127.0.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the address. You can set a different weight value for each address. This way, addresses are returned based on the weight values for DNS requests. A weight value must be an integer that ranges from 1 to 100.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * a49f55537f3b0b1e6e43add0bf5f****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      rr: 'Rr',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      remark: 'string',
      rr: 'string',
      status: 'string',
      ttl: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBodyRecords extends $tea.Model {
  record?: DescribeZoneRecordsResponseBodyRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeZoneRecordsResponseBodyRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc extends $tea.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region to which the VPC belongs.
   * 
   * @example
   * China (Heyuan)
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID. The unique ID of the VPC.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * demo-vpc
   */
  vpcName?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcs extends $tea.Model {
  vpc?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZone extends $tea.Model {
  /**
   * @remarks
   * The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-09-18T08:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1568794812000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the zone.
   * 
   * @example
   * 141339776561****
   */
  creator?: string;
  /**
   * @remarks
   * The operator type.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The logical location of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   NORMAL_ZONE: regular module
   * *   FAST_ZONE: acceleration module
   * 
   * @example
   * NORMAL_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * Indicates whether the zone is being removed to another logical location. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPtr?: boolean;
  /**
   * @remarks
   * The number of Domain Name System (DNS) records added for the zone.
   * 
   * @example
   * 1
   */
  recordCount?: number;
  /**
   * @remarks
   * The description of the zone.
   * 
   * @example
   * demo
   */
  remark?: string;
  /**
   * @remarks
   * The time when the zone was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-09-18T08:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the zone was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1568794834000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The VPCs associated with the zone.
   */
  vpcs?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * 6d83e3b31aa60ca4aaa7161f1b6baa95
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * 
   * **Valid values:**
   * 
   * *   If ZoneType is set to AUTH_ZONE, no value is returned for this parameter.
   * 
   * *   If ZoneType is set to CLOUD_PRODUCT_ZONE, the type of the cloud service is returned.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string;
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   CLOUD_PRODUCT_ZONE: authoritative zone for cloud services
   * 
   * @example
   * AUTH_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      recordCount: 'RecordCount',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcs: 'Vpcs',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      recordCount: 'number',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcs: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs,
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZones extends $tea.Model {
  zone?: DescribeZoneVpcTreeResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequestResourceTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N added to the zone.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the zone.
   * 
   * @example
   * daily
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N added to the zone.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the zone.
   * 
   * @example
   * daily
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneResourceTags extends $tea.Model {
  resourceTag?: DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag[];
  static names(): { [key: string]: string } {
    return {
      resourceTag: 'ResourceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTag: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  /**
   * @remarks
   * The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1514466483000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the zone.
   * 
   * @example
   * 546356****
   */
  creator?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * *   **CUSTOMER**: Alibaba Cloud account
   * *   **SUB**: RAM user
   * *   **STS**: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   **OTHER**: other types
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The logical location type of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   **NORMAL_ZONE**: regular module
   * *   **FAST_ZONE**: acceleration module
   * 
   * @example
   * NORMAL_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * Indicates whether the zone is being removed to another logical location. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isPtr?: boolean;
  /**
   * @remarks
   * Indicates whether the recursive resolution proxy for subdomain names is enabled. Valid values:
   * 
   * *   **ZONE**: The recursive resolution proxy for subdomain names is disabled. In this case, NXDOMAIN is returned if the queried domain name does not exist in the zone.
   * *   **RECORD**: The recursive resolution proxy for subdomain names is enabled. In this case, if the queried domain name does not exist in the zone, DNS requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The number of Domain Name System (DNS) records added in the zone.
   * 
   * @example
   * 2
   */
  recordCount?: number;
  /**
   * @remarks
   * The description of the zone.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-aekz2qj7awz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the zone.
   */
  resourceTags?: DescribeZonesResponseBodyZonesZoneResourceTags;
  /**
   * @remarks
   * The time when the zone was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-03T08:57Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1514969843000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * 6d83e3b31aa60ca4aaa7161f1b6b**95
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * test.com
   */
  zoneName?: string;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * *   If ZoneType is set to AUTH_ZONE, no value is returned for this parameter.
   * *   If ZoneType is set to CLOUD_PRODUCT_ZONE, the type of the cloud service is returned.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string;
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   **AUTH_ZONE**: authoritative zone
   * *   **CLOUD_PRODUCT_ZONE**: authoritative zone for cloud services
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      resourceTags: 'ResourceTags',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      resourceTags: DescribeZonesResponseBodyZonesZoneResourceTags,
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
   * 
   * @example
   * daily
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The resource ID, which is a zone ID.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
   * 
   * @example
   * daily
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBodyCustomLinesCustomLineIpv4s extends $tea.Model {
  ipv4?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBodyCustomLinesCustomLine extends $tea.Model {
  /**
   * @remarks
   * The time when the custom line was created.
   * 
   * @example
   * 2022-12-27 18:16:38
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the custom line was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1671174074000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the creator for the custom line.
   * 
   * @example
   * 1851321989648462
   */
  creator?: string;
  /**
   * @remarks
   * The creator type. Valid values:
   * 
   * *   CUSTOM: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other types
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The role of the creator for the custom line. Valid values:
   * 
   * *   USER: user
   * *   SYSTEM: system
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   */
  ipv4s?: SearchCustomLinesResponseBodyCustomLinesCustomLineIpv4s;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 11730
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The time when the custom line was updated.
   * 
   * @example
   * 2023-06-14 14:04:08
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the custom line was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      ipv4s: 'Ipv4s',
      lineId: 'LineId',
      name: 'Name',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      ipv4s: SearchCustomLinesResponseBodyCustomLinesCustomLineIpv4s,
      lineId: 'string',
      name: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBodyCustomLines extends $tea.Model {
  customLine?: SearchCustomLinesResponseBodyCustomLinesCustomLine[];
  static names(): { [key: string]: string } {
    return {
      customLine: 'CustomLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLine: { 'type': 'array', 'itemType': SearchCustomLinesResponseBodyCustomLinesCustomLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the resources.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resources.
   * 
   * @example
   * daily
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverEndpointRequestIpConfig extends $tea.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-hangzhou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block. If you leave this parameter empty, the system automatically allocates an IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jlgeyq4oazkh5xue****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleRequestForwardIp extends $tea.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * >  You cannot specify the following IP addresses as the IP addresses of the external DNS servers because the IP addresses are reserved by the system: 100.100.2.136 to 100.100.2.138, and 100.100.2.116 to 100.100.2.118.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination server.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskRequestRegion extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID to which the region belongs. This parameter is used in cross-account synchronization scenarios.
   * 
   * @example
   * 141339776561****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pvtz", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates a custom line.
   * 
   * @param request - AddCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomLineResponse
   */
  async addCustomLineWithOptions(request: AddCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnsCategory)) {
      query["DnsCategory"] = request.dnsCategory;
    }

    if (!Util.isUnset(request.ipv4s)) {
      query["Ipv4s"] = request.ipv4s;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.shareScope)) {
      query["ShareScope"] = request.shareScope;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomLine",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomLineResponse>(await this.callApi(params, req, runtime), new AddCustomLineResponse({}));
  }

  /**
   * Creates a custom line.
   * 
   * @param request - AddCustomLineRequest
   * @returns AddCustomLineResponse
   */
  async addCustomLine(request: AddCustomLineRequest): Promise<AddCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomLineWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint.
   * 
   * @param request - AddResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddResolverEndpointResponse
   */
  async addResolverEndpointWithOptions(request: AddResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<AddResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipConfig)) {
      query["IpConfig"] = request.ipConfig;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddResolverEndpointResponse>(await this.callApi(params, req, runtime), new AddResolverEndpointResponse({}));
  }

  /**
   * Creates an endpoint.
   * 
   * @param request - AddResolverEndpointRequest
   * @returns AddResolverEndpointResponse
   */
  async addResolverEndpoint(request: AddResolverEndpointRequest): Promise<AddResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Creates a forwarding rule.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * If a virtual private cloud (VPC) serves as both an inbound VPC and an outbound VPC, the IP addresses of external Domain Name System (DNS) servers cannot be the same as the IP addresses of the inbound endpoint in the VPC. The IP addresses of the external DNS servers are specified in the forwarding rule associated with the outbound endpoint in the same VPC. If the IP addresses are the same, the DNS requests sent from the IP addresses of the inbound endpoint are returned to the VPC. This results in resolution failures.
   * 
   * @param request - AddResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddResolverRuleResponse
   */
  async addResolverRuleWithOptions(request: AddResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.forwardIp)) {
      query["ForwardIp"] = request.forwardIp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddResolverRuleResponse>(await this.callApi(params, req, runtime), new AddResolverRuleResponse({}));
  }

  /**
   * Creates a forwarding rule.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * If a virtual private cloud (VPC) serves as both an inbound VPC and an outbound VPC, the IP addresses of external Domain Name System (DNS) servers cannot be the same as the IP addresses of the inbound endpoint in the VPC. The IP addresses of the external DNS servers are specified in the forwarding rule associated with the outbound endpoint in the same VPC. If the IP addresses are the same, the DNS requests sent from the IP addresses of the inbound endpoint are returned to the VPC. This results in resolution failures.
   * 
   * @param request - AddResolverRuleRequest
   * @returns AddResolverRuleResponse
   */
  async addResolverRule(request: AddResolverRuleRequest): Promise<AddResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addResolverRuleWithOptions(request, runtime);
  }

  /**
   * Adds another account to associate one or more virtual private clouds (VPCs) of the current account with a private zone.
   * 
   * @remarks
   * #### **Limits**
   * *   You can set an effective scope across accounts only by using an Alibaba Cloud account instead of a RAM user. You can set an effective scope across accounts registered on the same site. For example, you can perform the operation across accounts that are both registered on the Alibaba Cloud China site or Alibaba Cloud international site. You cannot set an effective scope across accounts registered on different sites. For example, you cannot perform the operation across accounts that are separately registered on the Alibaba Cloud China site and Alibaba Cloud international site.
   * *   No API operation is provided for sending the verification codes that are required for authorization.
   * #### **Precautions**
   * If you set an effective scope across accounts, bills are settled within the account that is used to perform routine management on built-in authoritative zones.
   * 
   * @param request - AddUserVpcAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserVpcAuthorizationResponse
   */
  async addUserVpcAuthorizationWithOptions(request: AddUserVpcAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<AddUserVpcAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authChannel)) {
      query["AuthChannel"] = request.authChannel;
    }

    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserVpcAuthorization",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserVpcAuthorizationResponse>(await this.callApi(params, req, runtime), new AddUserVpcAuthorizationResponse({}));
  }

  /**
   * Adds another account to associate one or more virtual private clouds (VPCs) of the current account with a private zone.
   * 
   * @remarks
   * #### **Limits**
   * *   You can set an effective scope across accounts only by using an Alibaba Cloud account instead of a RAM user. You can set an effective scope across accounts registered on the same site. For example, you can perform the operation across accounts that are both registered on the Alibaba Cloud China site or Alibaba Cloud international site. You cannot set an effective scope across accounts registered on different sites. For example, you cannot perform the operation across accounts that are separately registered on the Alibaba Cloud China site and Alibaba Cloud international site.
   * *   No API operation is provided for sending the verification codes that are required for authorization.
   * #### **Precautions**
   * If you set an effective scope across accounts, bills are settled within the account that is used to perform routine management on built-in authoritative zones.
   * 
   * @param request - AddUserVpcAuthorizationRequest
   * @returns AddUserVpcAuthorizationResponse
   */
  async addUserVpcAuthorization(request: AddUserVpcAuthorizationRequest): Promise<AddUserVpcAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserVpcAuthorizationWithOptions(request, runtime);
  }

  /**
   * Creates a built-in authoritative zone in the regular module or acceleration module.
   * 
   * @param request - AddZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddZoneResponse
   */
  async addZoneWithOptions(request: AddZoneRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dnsGroup)) {
      query["DnsGroup"] = request.dnsGroup;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    if (!Util.isUnset(request.zoneTag)) {
      query["ZoneTag"] = request.zoneTag;
    }

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddZone",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddZoneResponse>(await this.callApi(params, req, runtime), new AddZoneResponse({}));
  }

  /**
   * Creates a built-in authoritative zone in the regular module or acceleration module.
   * 
   * @param request - AddZoneRequest
   * @returns AddZoneResponse
   */
  async addZone(request: AddZoneRequest): Promise<AddZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneWithOptions(request, runtime);
  }

  /**
   * Adds a Domain Name System (DNS) record for a built-in authoritative zone. Within the effective scope, the intranet DNS records rather than the Internet DNS records take effect for the zone.
   * 
   * @param request - AddZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddZoneRecordResponse
   */
  async addZoneRecordWithOptions(request: AddZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddZoneRecordResponse>(await this.callApi(params, req, runtime), new AddZoneRecordResponse({}));
  }

  /**
   * Adds a Domain Name System (DNS) record for a built-in authoritative zone. Within the effective scope, the intranet DNS records rather than the Internet DNS records take effect for the zone.
   * 
   * @param request - AddZoneRecordRequest
   * @returns AddZoneRecordResponse
   */
  async addZoneRecord(request: AddZoneRecordRequest): Promise<AddZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneRecordWithOptions(request, runtime);
  }

  /**
   * Associates a forwarding rule with virtual private clouds (VPCs).
   * 
   * @param request - BindResolverRuleVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindResolverRuleVpcResponse
   */
  async bindResolverRuleVpcWithOptions(request: BindResolverRuleVpcRequest, runtime: $Util.RuntimeOptions): Promise<BindResolverRuleVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.vpc)) {
      query["Vpc"] = request.vpc;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindResolverRuleVpc",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindResolverRuleVpcResponse>(await this.callApi(params, req, runtime), new BindResolverRuleVpcResponse({}));
  }

  /**
   * Associates a forwarding rule with virtual private clouds (VPCs).
   * 
   * @param request - BindResolverRuleVpcRequest
   * @returns BindResolverRuleVpcResponse
   */
  async bindResolverRuleVpc(request: BindResolverRuleVpcRequest): Promise<BindResolverRuleVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindResolverRuleVpcWithOptions(request, runtime);
  }

  /**
   * Associates or dissociates virtual private clouds (VPCs) from a zone to set the effective scope of the zone.
   * 
   * @remarks
   * ##### [](#)Precautions:
   * We recommend that you set the effective scope of a zone after you configure all Domain Name System (DNS) records. If you set an effective scope before you configure DNS records, the DNS resolution for the zone within the effective scope will fail unless you enable the recursive resolution proxy for subdomain names.
   * 
   * @param request - BindZoneVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindZoneVpcResponse
   */
  async bindZoneVpcWithOptions(request: BindZoneVpcRequest, runtime: $Util.RuntimeOptions): Promise<BindZoneVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.vpcs)) {
      query["Vpcs"] = request.vpcs;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindZoneVpc",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindZoneVpcResponse>(await this.callApi(params, req, runtime), new BindZoneVpcResponse({}));
  }

  /**
   * Associates or dissociates virtual private clouds (VPCs) from a zone to set the effective scope of the zone.
   * 
   * @remarks
   * ##### [](#)Precautions:
   * We recommend that you set the effective scope of a zone after you configure all Domain Name System (DNS) records. If you set an effective scope before you configure DNS records, the DNS resolution for the zone within the effective scope will fail unless you enable the recursive resolution proxy for subdomain names.
   * 
   * @param request - BindZoneVpcRequest
   * @returns BindZoneVpcResponse
   */
  async bindZoneVpc(request: BindZoneVpcRequest): Promise<BindZoneVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindZoneVpcWithOptions(request, runtime);
  }

  /**
   * Changes the logical location of a zone.
   * 
   * @param request - ChangeZoneDnsGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeZoneDnsGroupResponse
   */
  async changeZoneDnsGroupWithOptions(request: ChangeZoneDnsGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeZoneDnsGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dnsGroup)) {
      query["DnsGroup"] = request.dnsGroup;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeZoneDnsGroup",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeZoneDnsGroupResponse>(await this.callApi(params, req, runtime), new ChangeZoneDnsGroupResponse({}));
  }

  /**
   * Changes the logical location of a zone.
   * 
   * @param request - ChangeZoneDnsGroupRequest
   * @returns ChangeZoneDnsGroupResponse
   */
  async changeZoneDnsGroup(request: ChangeZoneDnsGroupRequest): Promise<ChangeZoneDnsGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeZoneDnsGroupWithOptions(request, runtime);
  }

  /**
   * Checks whether a zone name can be added based on a rule.
   * 
   * @param request - CheckZoneNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckZoneNameResponse
   */
  async checkZoneNameWithOptions(request: CheckZoneNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckZoneNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckZoneName",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckZoneNameResponse>(await this.callApi(params, req, runtime), new CheckZoneNameResponse({}));
  }

  /**
   * Checks whether a zone name can be added based on a rule.
   * 
   * @param request - CheckZoneNameRequest
   * @returns CheckZoneNameResponse
   */
  async checkZoneName(request: CheckZoneNameRequest): Promise<CheckZoneNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkZoneNameWithOptions(request, runtime);
  }

  /**
   * Deletes a custom line.
   * 
   * @param request - DeleteCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomLineResponse
   */
  async deleteCustomLineWithOptions(request: DeleteCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomLine",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomLineResponse>(await this.callApi(params, req, runtime), new DeleteCustomLineResponse({}));
  }

  /**
   * Deletes a custom line.
   * 
   * @param request - DeleteCustomLineRequest
   * @returns DeleteCustomLineResponse
   */
  async deleteCustomLine(request: DeleteCustomLineRequest): Promise<DeleteCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomLineWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint based on the endpoint ID.
   * 
   * @param request - DeleteResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResolverEndpointResponse
   */
  async deleteResolverEndpointWithOptions(request: DeleteResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResolverEndpointResponse>(await this.callApi(params, req, runtime), new DeleteResolverEndpointResponse({}));
  }

  /**
   * Deletes an endpoint based on the endpoint ID.
   * 
   * @param request - DeleteResolverEndpointRequest
   * @returns DeleteResolverEndpointResponse
   */
  async deleteResolverEndpoint(request: DeleteResolverEndpointRequest): Promise<DeleteResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes a forwarding rule based on the rule ID.
   * 
   * @param request - DeleteResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResolverRuleResponse
   */
  async deleteResolverRuleWithOptions(request: DeleteResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResolverRuleResponse>(await this.callApi(params, req, runtime), new DeleteResolverRuleResponse({}));
  }

  /**
   * Deletes a forwarding rule based on the rule ID.
   * 
   * @param request - DeleteResolverRuleRequest
   * @returns DeleteResolverRuleResponse
   */
  async deleteResolverRule(request: DeleteResolverRuleRequest): Promise<DeleteResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResolverRuleWithOptions(request, runtime);
  }

  /**
   * Removes an account from the central management of private Domain Name System (DNS) resolution based on the account ID and authorization type.
   * 
   * @param request - DeleteUserVpcAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserVpcAuthorizationResponse
   */
  async deleteUserVpcAuthorizationWithOptions(request: DeleteUserVpcAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserVpcAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserVpcAuthorization",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserVpcAuthorizationResponse>(await this.callApi(params, req, runtime), new DeleteUserVpcAuthorizationResponse({}));
  }

  /**
   * Removes an account from the central management of private Domain Name System (DNS) resolution based on the account ID and authorization type.
   * 
   * @param request - DeleteUserVpcAuthorizationRequest
   * @returns DeleteUserVpcAuthorizationResponse
   */
  async deleteUserVpcAuthorization(request: DeleteUserVpcAuthorizationRequest): Promise<DeleteUserVpcAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserVpcAuthorizationWithOptions(request, runtime);
  }

  /**
   * Deletes an idle built-in authoritative zone.
   * 
   * @remarks
   * #### [](#)Precautions
   * If you want to delete a built-in authoritative zone whose effective scope is configured, you must disassociate the zone from the effective scope first.
   * 
   * @param request - DeleteZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteZoneResponse
   */
  async deleteZoneWithOptions(request: DeleteZoneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteZone",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteZoneResponse>(await this.callApi(params, req, runtime), new DeleteZoneResponse({}));
  }

  /**
   * Deletes an idle built-in authoritative zone.
   * 
   * @remarks
   * #### [](#)Precautions
   * If you want to delete a built-in authoritative zone whose effective scope is configured, you must disassociate the zone from the effective scope first.
   * 
   * @param request - DeleteZoneRequest
   * @returns DeleteZoneResponse
   */
  async deleteZone(request: DeleteZoneRequest): Promise<DeleteZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZoneWithOptions(request, runtime);
  }

  /**
   * Deletes a Domain Name System (DNS) record based on the ID of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * Deleted DNS records cannot be restored. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteZoneRecordResponse
   */
  async deleteZoneRecordWithOptions(request: DeleteZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteZoneRecordResponse>(await this.callApi(params, req, runtime), new DeleteZoneRecordResponse({}));
  }

  /**
   * Deletes a Domain Name System (DNS) record based on the ID of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * Deleted DNS records cannot be restored. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteZoneRecordRequest
   * @returns DeleteZoneRecordResponse
   */
  async deleteZoneRecord(request: DeleteZoneRecordRequest): Promise<DeleteZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZoneRecordWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of Private DNS. Operation logs record operations in modules such as the built-in authoritative module, cache module, forward module, and service address module and record the queries for Domain Name System (DNS) records. You can query operation logs by operation or operation content.
   * 
   * @remarks
   * #### **Precautions**
   * You can query the operation logs of Private DNS that are generated within the last six months.
   * 
   * @param request - DescribeChangeLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChangeLogsResponse
   */
  async describeChangeLogsWithOptions(request: DescribeChangeLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChangeLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChangeLogs",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChangeLogsResponse>(await this.callApi(params, req, runtime), new DescribeChangeLogsResponse({}));
  }

  /**
   * Queries the operation logs of Private DNS. Operation logs record operations in modules such as the built-in authoritative module, cache module, forward module, and service address module and record the queries for Domain Name System (DNS) records. You can query operation logs by operation or operation content.
   * 
   * @remarks
   * #### **Precautions**
   * You can query the operation logs of Private DNS that are generated within the last six months.
   * 
   * @param request - DescribeChangeLogsRequest
   * @returns DescribeChangeLogsResponse
   */
  async describeChangeLogs(request: DescribeChangeLogsRequest): Promise<DescribeChangeLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChangeLogsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a custom line.
   * 
   * @param request - DescribeCustomLineInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLineInfoResponse
   */
  async describeCustomLineInfoWithOptions(request: DescribeCustomLineInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLineInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomLineInfo",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomLineInfoResponse>(await this.callApi(params, req, runtime), new DescribeCustomLineInfoResponse({}));
  }

  /**
   * Queries the information about a custom line.
   * 
   * @param request - DescribeCustomLineInfoRequest
   * @returns DescribeCustomLineInfoResponse
   */
  async describeCustomLineInfo(request: DescribeCustomLineInfoRequest): Promise<DescribeCustomLineInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLineInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom lines.
   * 
   * @param request - DescribeCustomLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLinesResponse
   */
  async describeCustomLinesWithOptions(request: DescribeCustomLinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomLines",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomLinesResponse>(await this.callApi(params, req, runtime), new DescribeCustomLinesResponse({}));
  }

  /**
   * Queries a list of custom lines.
   * 
   * @param request - DescribeCustomLinesRequest
   * @returns DescribeCustomLinesResponse
   */
  async describeCustomLines(request: DescribeCustomLinesRequest): Promise<DescribeCustomLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLinesWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions for selection based on the scenario and virtual private cloud (VPC) type.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.vpcType)) {
      query["VpcType"] = request.vpcType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries a list of regions for selection based on the scenario and virtual private cloud (VPC) type.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about Domain Name System (DNS) requests based on conditions such as the time range.
   * 
   * @param request - DescribeRequestGraphRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRequestGraphResponse
   */
  async describeRequestGraphWithOptions(request: DescribeRequestGraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestGraphResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRequestGraph",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRequestGraphResponse>(await this.callApi(params, req, runtime), new DescribeRequestGraphResponse({}));
  }

  /**
   * Queries the information about Domain Name System (DNS) requests based on conditions such as the time range.
   * 
   * @param request - DescribeRequestGraphRequest
   * @returns DescribeRequestGraphResponse
   */
  async describeRequestGraph(request: DescribeRequestGraphRequest): Promise<DescribeRequestGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestGraphWithOptions(request, runtime);
  }

  /**
   * Queries a list of available zones.
   * 
   * @param request - DescribeResolverAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverAvailableZonesResponse
   */
  async describeResolverAvailableZonesWithOptions(request: DescribeResolverAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverAvailableZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.azId)) {
      query["AzId"] = request.azId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resolverRegionId)) {
      query["ResolverRegionId"] = request.resolverRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverAvailableZones",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverAvailableZonesResponse>(await this.callApi(params, req, runtime), new DescribeResolverAvailableZonesResponse({}));
  }

  /**
   * Queries a list of available zones.
   * 
   * @param request - DescribeResolverAvailableZonesRequest
   * @returns DescribeResolverAvailableZonesResponse
   */
  async describeResolverAvailableZones(request: DescribeResolverAvailableZonesRequest): Promise<DescribeResolverAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverAvailableZonesWithOptions(request, runtime);
  }

  /**
   * Queries the information about an endpoint based on the endpoint ID.
   * 
   * @param request - DescribeResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverEndpointResponse
   */
  async describeResolverEndpointWithOptions(request: DescribeResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverEndpointResponse>(await this.callApi(params, req, runtime), new DescribeResolverEndpointResponse({}));
  }

  /**
   * Queries the information about an endpoint based on the endpoint ID.
   * 
   * @param request - DescribeResolverEndpointRequest
   * @returns DescribeResolverEndpointResponse
   */
  async describeResolverEndpoint(request: DescribeResolverEndpointRequest): Promise<DescribeResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoints.
   * 
   * @param request - DescribeResolverEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverEndpointsResponse
   */
  async describeResolverEndpointsWithOptions(request: DescribeResolverEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverEndpoints",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeResolverEndpointsResponse({}));
  }

  /**
   * Queries a list of endpoints.
   * 
   * @param request - DescribeResolverEndpointsRequest
   * @returns DescribeResolverEndpointsResponse
   */
  async describeResolverEndpoints(request: DescribeResolverEndpointsRequest): Promise<DescribeResolverEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a forwarding rule based on the ID of the forwarding rule.
   * 
   * @param request - DescribeResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverRuleResponse
   */
  async describeResolverRuleWithOptions(request: DescribeResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverRuleResponse>(await this.callApi(params, req, runtime), new DescribeResolverRuleResponse({}));
  }

  /**
   * Queries the information about a forwarding rule based on the ID of the forwarding rule.
   * 
   * @param request - DescribeResolverRuleRequest
   * @returns DescribeResolverRuleResponse
   */
  async describeResolverRule(request: DescribeResolverRuleRequest): Promise<DescribeResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverRuleWithOptions(request, runtime);
  }

  /**
   * Queries a list of forwarding rules.
   * 
   * @param request - DescribeResolverRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverRulesResponse
   */
  async describeResolverRulesWithOptions(request: DescribeResolverRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverRules",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverRulesResponse>(await this.callApi(params, req, runtime), new DescribeResolverRulesResponse({}));
  }

  /**
   * Queries a list of forwarding rules.
   * 
   * @param request - DescribeResolverRulesRequest
   * @returns DescribeResolverRulesResponse
   */
  async describeResolverRules(request: DescribeResolverRulesRequest): Promise<DescribeResolverRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverRulesWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on Domain Name System (DNS) requests received on the previous day, including the top three zones and virtual private clouds (VPCs) with the largest number of DNS requests.
   * 
   * @param request - DescribeStatisticSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStatisticSummaryResponse
   */
  async describeStatisticSummaryWithOptions(request: DescribeStatisticSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStatisticSummary",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStatisticSummaryResponse>(await this.callApi(params, req, runtime), new DescribeStatisticSummaryResponse({}));
  }

  /**
   * Queries the statistics on Domain Name System (DNS) requests received on the previous day, including the top three zones and virtual private clouds (VPCs) with the largest number of DNS requests.
   * 
   * @param request - DescribeStatisticSummaryRequest
   * @returns DescribeStatisticSummaryResponse
   */
  async describeStatisticSummary(request: DescribeStatisticSummaryRequest): Promise<DescribeStatisticSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a hostname synchronization task based on a zone ID.
   * 
   * @remarks
   * You can call the DescribeSyncEcsHostTask operation to query the information about a hostname synchronization task based on a zone ID.
   * 
   * @param request - DescribeSyncEcsHostTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncEcsHostTaskResponse
   */
  async describeSyncEcsHostTaskWithOptions(request: DescribeSyncEcsHostTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSyncEcsHostTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSyncEcsHostTask",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSyncEcsHostTaskResponse>(await this.callApi(params, req, runtime), new DescribeSyncEcsHostTaskResponse({}));
  }

  /**
   * Queries the information about a hostname synchronization task based on a zone ID.
   * 
   * @remarks
   * You can call the DescribeSyncEcsHostTask operation to query the information about a hostname synchronization task based on a zone ID.
   * 
   * @param request - DescribeSyncEcsHostTaskRequest
   * @returns DescribeSyncEcsHostTaskResponse
   */
  async describeSyncEcsHostTask(request: DescribeSyncEcsHostTaskRequest): Promise<DescribeSyncEcsHostTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSyncEcsHostTaskWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### **Precautions**
   * You can call this API operation to query the information about tags added only to zones.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  /**
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### **Precautions**
   * You can call this API operation to query the information about tags added only to zones.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Query the current user\\"s service status, such as whether the service is activated, whether there are any unpaid fees, etc.
   * 
   * @param request - DescribeUserServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserServiceStatusResponse
   */
  async describeUserServiceStatusWithOptions(request: DescribeUserServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserServiceStatus",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserServiceStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserServiceStatusResponse({}));
  }

  /**
   * Query the current user\\"s service status, such as whether the service is activated, whether there are any unpaid fees, etc.
   * 
   * @param request - DescribeUserServiceStatusRequest
   * @returns DescribeUserServiceStatusResponse
   */
  async describeUserServiceStatus(request: DescribeUserServiceStatusRequest): Promise<DescribeUserServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of accounts whose virtual private clouds (VPCs) are associated with a private zone.
   * 
   * @param request - DescribeUserVpcAuthorizationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserVpcAuthorizationsResponse
   */
  async describeUserVpcAuthorizationsWithOptions(request: DescribeUserVpcAuthorizationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserVpcAuthorizationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserVpcAuthorizations",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserVpcAuthorizationsResponse>(await this.callApi(params, req, runtime), new DescribeUserVpcAuthorizationsResponse({}));
  }

  /**
   * Queries a list of accounts whose virtual private clouds (VPCs) are associated with a private zone.
   * 
   * @param request - DescribeUserVpcAuthorizationsRequest
   * @returns DescribeUserVpcAuthorizationsResponse
   */
  async describeUserVpcAuthorizations(request: DescribeUserVpcAuthorizationsRequest): Promise<DescribeUserVpcAuthorizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserVpcAuthorizationsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a built-in authoritative zone, such as the virtual private clouds (VPCs) that are associated with the zone.
   * 
   * @param request - DescribeZoneInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneInfoResponse
   */
  async describeZoneInfoWithOptions(request: DescribeZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneInfo",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneInfoResponse>(await this.callApi(params, req, runtime), new DescribeZoneInfoResponse({}));
  }

  /**
   * Queries the information about a built-in authoritative zone, such as the virtual private clouds (VPCs) that are associated with the zone.
   * 
   * @param request - DescribeZoneInfoRequest
   * @returns DescribeZoneInfoResponse
   */
  async describeZoneInfo(request: DescribeZoneInfoRequest): Promise<DescribeZoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Domain Name System (DNS) record.
   * 
   * @param request - DescribeZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneRecordResponse
   */
  async describeZoneRecordWithOptions(request: DescribeZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneRecordResponse>(await this.callApi(params, req, runtime), new DescribeZoneRecordResponse({}));
  }

  /**
   * Queries the information about a Domain Name System (DNS) record.
   * 
   * @param request - DescribeZoneRecordRequest
   * @returns DescribeZoneRecordResponse
   */
  async describeZoneRecord(request: DescribeZoneRecordRequest): Promise<DescribeZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneRecordWithOptions(request, runtime);
  }

  /**
   * Queries a list of Domain Name System (DNS) records.
   * 
   * @param request - DescribeZoneRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneRecordsResponse
   */
  async describeZoneRecordsWithOptions(request: DescribeZoneRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneRecords",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneRecordsResponse>(await this.callApi(params, req, runtime), new DescribeZoneRecordsResponse({}));
  }

  /**
   * Queries a list of Domain Name System (DNS) records.
   * 
   * @param request - DescribeZoneRecordsRequest
   * @returns DescribeZoneRecordsResponse
   */
  async describeZoneRecords(request: DescribeZoneRecordsRequest): Promise<DescribeZoneRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones within the current account and a list of virtual private clouds (VPCs) associated with the zones.
   * 
   * @remarks
   * We recommend that you do not call this API operation due to its poor performance. Instead, you can call the DescribeZones operation to query a list of zones. If you want to query the information about VPCs with which a zone is associated, you can call the DescribeZoneInfo operation based on the zone ID.
   * 
   * @param request - DescribeZoneVpcTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneVpcTreeResponse
   */
  async describeZoneVpcTreeWithOptions(request: DescribeZoneVpcTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneVpcTreeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneVpcTree",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneVpcTreeResponse>(await this.callApi(params, req, runtime), new DescribeZoneVpcTreeResponse({}));
  }

  /**
   * Queries a list of zones within the current account and a list of virtual private clouds (VPCs) associated with the zones.
   * 
   * @remarks
   * We recommend that you do not call this API operation due to its poor performance. Instead, you can call the DescribeZones operation to query a list of zones. If you want to query the information about VPCs with which a zone is associated, you can call the DescribeZoneInfo operation based on the zone ID.
   * 
   * @param request - DescribeZoneVpcTreeRequest
   * @returns DescribeZoneVpcTreeResponse
   */
  async describeZoneVpcTree(request: DescribeZoneVpcTreeRequest): Promise<DescribeZoneVpcTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneVpcTreeWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones within the current account.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryRegionId)) {
      query["QueryRegionId"] = request.queryRegionId;
    }

    if (!Util.isUnset(request.queryVpcId)) {
      query["QueryVpcId"] = request.queryVpcId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceTag)) {
      query["ResourceTag"] = request.resourceTag;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.zoneTag)) {
      query["ZoneTag"] = request.zoneTag;
    }

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * Queries a list of zones within the current account.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to query tags added only to zones.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to query tags added only to zones.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes a resource group.
   * 
   * @remarks
   * #### [](#)Precautions
   * You can call this API operation to change a resource group only for a zone.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * Changes a resource group.
   * 
   * @remarks
   * #### [](#)Precautions
   * You can call this API operation to change a resource group only for a zone.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom lines.
   * 
   * @param request - SearchCustomLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCustomLinesResponse
   */
  async searchCustomLinesWithOptions(request: SearchCustomLinesRequest, runtime: $Util.RuntimeOptions): Promise<SearchCustomLinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimestampEnd)) {
      query["CreateTimestampEnd"] = request.createTimestampEnd;
    }

    if (!Util.isUnset(request.createTimestampStart)) {
      query["CreateTimestampStart"] = request.createTimestampStart;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.ipv4)) {
      query["Ipv4"] = request.ipv4;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.updateTimestampEnd)) {
      query["UpdateTimestampEnd"] = request.updateTimestampEnd;
    }

    if (!Util.isUnset(request.updateTimestampStart)) {
      query["UpdateTimestampStart"] = request.updateTimestampStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchCustomLines",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchCustomLinesResponse>(await this.callApi(params, req, runtime), new SearchCustomLinesResponse({}));
  }

  /**
   * Queries a list of custom lines.
   * 
   * @param request - SearchCustomLinesRequest
   * @returns SearchCustomLinesResponse
   */
  async searchCustomLines(request: SearchCustomLinesRequest): Promise<SearchCustomLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchCustomLinesWithOptions(request, runtime);
  }

  /**
   * Enables the recursive resolution proxy for subdomain names.
   * 
   * @param request - SetProxyPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetProxyPatternResponse
   */
  async setProxyPatternWithOptions(request: SetProxyPatternRequest, runtime: $Util.RuntimeOptions): Promise<SetProxyPatternResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetProxyPattern",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetProxyPatternResponse>(await this.callApi(params, req, runtime), new SetProxyPatternResponse({}));
  }

  /**
   * Enables the recursive resolution proxy for subdomain names.
   * 
   * @param request - SetProxyPatternRequest
   * @returns SetProxyPatternResponse
   */
  async setProxyPattern(request: SetProxyPatternRequest): Promise<SetProxyPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setProxyPatternWithOptions(request, runtime);
  }

  /**
   * Enables or disables a Domain Name System (DNS) record.
   * 
   * @param request - SetZoneRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetZoneRecordStatusResponse
   */
  async setZoneRecordStatusWithOptions(request: SetZoneRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetZoneRecordStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetZoneRecordStatus",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetZoneRecordStatusResponse>(await this.callApi(params, req, runtime), new SetZoneRecordStatusResponse({}));
  }

  /**
   * Enables or disables a Domain Name System (DNS) record.
   * 
   * @param request - SetZoneRecordStatusRequest
   * @returns SetZoneRecordStatusResponse
   */
  async setZoneRecordStatus(request: SetZoneRecordStatusRequest): Promise<SetZoneRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setZoneRecordStatusWithOptions(request, runtime);
  }

  /**
   * Adds or modifies tags for zones.
   * 
   * @remarks
   * ##### [](#)Precautions
   * You can configure tags only for zones.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.overWrite)) {
      query["OverWrite"] = request.overWrite;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds or modifies tags for zones.
   * 
   * @remarks
   * ##### [](#)Precautions
   * You can configure tags only for zones.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes the tags of multiple zones at a time.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to remove tags added only to zones.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes the tags of multiple zones at a time.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to remove tags added only to zones.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a custom line.
   * 
   * @param request - UpdateCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLineWithOptions(request: UpdateCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipv4s)) {
      query["Ipv4s"] = request.ipv4s;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomLine",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomLineResponse>(await this.callApi(params, req, runtime), new UpdateCustomLineResponse({}));
  }

  /**
   * Modifies a custom line.
   * 
   * @param request - UpdateCustomLineRequest
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLine(request: UpdateCustomLineRequest): Promise<UpdateCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomLineWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a Domain Name System (DNS) record based on the record ID.
   * 
   * @param request - UpdateRecordRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordRemarkResponse
   */
  async updateRecordRemarkWithOptions(request: UpdateRecordRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecordRemark",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordRemarkResponse>(await this.callApi(params, req, runtime), new UpdateRecordRemarkResponse({}));
  }

  /**
   * Modifies the description of a Domain Name System (DNS) record based on the record ID.
   * 
   * @param request - UpdateRecordRemarkRequest
   * @returns UpdateRecordRemarkResponse
   */
  async updateRecordRemark(request: UpdateRecordRemarkRequest): Promise<UpdateRecordRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies an endpoint.
   * 
   * @param request - UpdateResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResolverEndpointResponse
   */
  async updateResolverEndpointWithOptions(request: UpdateResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.ipConfig)) {
      query["IpConfig"] = request.ipConfig;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResolverEndpointResponse>(await this.callApi(params, req, runtime), new UpdateResolverEndpointResponse({}));
  }

  /**
   * Modifies an endpoint.
   * 
   * @param request - UpdateResolverEndpointRequest
   * @returns UpdateResolverEndpointResponse
   */
  async updateResolverEndpoint(request: UpdateResolverEndpointRequest): Promise<UpdateResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies a forwarding rule.
   * 
   * @param request - UpdateResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResolverRuleResponse
   */
  async updateResolverRuleWithOptions(request: UpdateResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.forwardIp)) {
      query["ForwardIp"] = request.forwardIp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResolverRuleResponse>(await this.callApi(params, req, runtime), new UpdateResolverRuleResponse({}));
  }

  /**
   * Modifies a forwarding rule.
   * 
   * @param request - UpdateResolverRuleRequest
   * @returns UpdateResolverRuleResponse
   */
  async updateResolverRule(request: UpdateResolverRuleRequest): Promise<UpdateResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResolverRuleWithOptions(request, runtime);
  }

  /**
   * Adds or updates a hostname synchronization task.
   * 
   * @param request - UpdateSyncEcsHostTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSyncEcsHostTaskResponse
   */
  async updateSyncEcsHostTaskWithOptions(request: UpdateSyncEcsHostTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSyncEcsHostTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSyncEcsHostTask",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSyncEcsHostTaskResponse>(await this.callApi(params, req, runtime), new UpdateSyncEcsHostTaskResponse({}));
  }

  /**
   * Adds or updates a hostname synchronization task.
   * 
   * @param request - UpdateSyncEcsHostTaskRequest
   * @returns UpdateSyncEcsHostTaskResponse
   */
  async updateSyncEcsHostTask(request: UpdateSyncEcsHostTaskRequest): Promise<UpdateSyncEcsHostTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSyncEcsHostTaskWithOptions(request, runtime);
  }

  /**
   * Modifies a Domain Name System (DNS) record of a zone, including the hostname, record value, and weight value of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * The DNS record modification for a zone in the regular module takes effect only after the time to live (TTL) expires. The DNS record modification for a zone in the acceleration module takes effect immediately.
   * 
   * @param request - UpdateZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateZoneRecordResponse
   */
  async updateZoneRecordWithOptions(request: UpdateZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateZoneRecordResponse>(await this.callApi(params, req, runtime), new UpdateZoneRecordResponse({}));
  }

  /**
   * Modifies a Domain Name System (DNS) record of a zone, including the hostname, record value, and weight value of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * The DNS record modification for a zone in the regular module takes effect only after the time to live (TTL) expires. The DNS record modification for a zone in the acceleration module takes effect immediately.
   * 
   * @param request - UpdateZoneRecordRequest
   * @returns UpdateZoneRecordResponse
   */
  async updateZoneRecord(request: UpdateZoneRecordRequest): Promise<UpdateZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZoneRecordWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a built-in authoritative zone.
   * 
   * @param request - UpdateZoneRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateZoneRemarkResponse
   */
  async updateZoneRemarkWithOptions(request: UpdateZoneRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZoneRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateZoneRemark",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateZoneRemarkResponse>(await this.callApi(params, req, runtime), new UpdateZoneRemarkResponse({}));
  }

  /**
   * Modifies the description of a built-in authoritative zone.
   * 
   * @param request - UpdateZoneRemarkRequest
   * @returns UpdateZoneRemarkResponse
   */
  async updateZoneRemark(request: UpdateZoneRemarkRequest): Promise<UpdateZoneRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZoneRemarkWithOptions(request, runtime);
  }

}
