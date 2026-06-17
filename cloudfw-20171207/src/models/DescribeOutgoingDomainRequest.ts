// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The asset category. If you leave this parameter empty, assets in all categories are queried. Valid values:
   * 
   * - **All**: all categories
   * 
   * - **RiskDomain**: risky domain names
   * 
   * - **RiskIP**: risky IP addresses
   * 
   * - **AliYun**: Alibaba Cloud services
   * 
   * - **NotAliYun**: third-party services
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The source of traffic statistics. The default value is \\`internet\\`, which indicates Internet Firewall. Valid values:
   * 
   * - **internet**: Internet Firewall
   * 
   * - **nat**: NAT Firewall
   * 
   * @example
   * nat
   */
  dataType?: string;
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
   * The end of the time range to query. This is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to count only traffic from accessing AI services. The default value is \\`false\\`. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - **asc**: ascending
   * 
   * - **desc** (default): descending
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 6. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The public IP address of the Elastic Compute Service (ECS) instance that initiates the outbound connections.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The field to sort by. Valid values:
   * 
   * - **SessionCount** (default): the number of requests
   * 
   * - **TotalBytes**: the total traffic
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the intelligence tag. Valid values:
   * 
   * - **AliYun**: Alibaba Cloud service
   * 
   * - **RiskDomain**: Risky domain name
   * 
   * - **RiskIP**: Risky IP address
   * 
   * - **TrustedDomain**: Trusted website
   * 
   * - **AliPay**: Alipay
   * 
   * - **DingDing**: DingTalk
   * 
   * - **WeChat**: WeChat
   * 
   * - **QQ**: Tencent QQ
   * 
   * - **SecurityService**: Security service
   * 
   * - **Microsoft**: Microsoft
   * 
   * - **Amazon**: Amazon
   * 
   * - **Pan**: Cloud storage service
   * 
   * - **Map**: Map service
   * 
   * - **Code**: Code hosting service
   * 
   * - **SystemService**: System service
   * 
   * - **Taobao**: Taobao
   * 
   * - **Google**: Google
   * 
   * - **ThirdPartyService**: Third-party service
   * 
   * - **FirstFlow**: First-time access
   * 
   * - **Downloader**: Malicious downloader
   * 
   * - **Alexa Top 1M**: Popular website
   * 
   * - **Miner**: Mining pool
   * 
   * - **Intelligence**: Threat intelligence
   * 
   * - **DDoS**: DDoS trojan
   * 
   * - **Ransomware**: Ransomware
   * 
   * - **Spyware**: Spyware
   * 
   * - **Rogue**: Rogue software
   * 
   * - **Botnet**: Botnet
   * 
   * - **Suspicious**: Suspicious website
   * 
   * - **C\\&C**: Command and control (C\\&C)
   * 
   * - **Gang**: Gang-related activity
   * 
   * - **CVE**: CVE vulnerability
   * 
   * - **Backdoor**: Backdoor
   * 
   * - **Phishing**: Phishing website
   * 
   * - **APT**: Advanced Persistent Threat (APT) attack
   * 
   * - **Supply Chain Attack**: Supply chain attack
   * 
   * - **Malware**: Malicious software
   * 
   * @example
   * AliYun
   */
  tagIdNew?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      currentPage: 'CurrentPage',
      dataType: 'DataType',
      domain: 'Domain',
      endTime: 'EndTime',
      isAITraffic: 'IsAITraffic',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
      tagIdNew: 'TagIdNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      currentPage: 'string',
      dataType: 'string',
      domain: 'string',
      endTime: 'string',
      isAITraffic: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      publicIP: 'string',
      sort: 'string',
      startTime: 'string',
      tagIdNew: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

