// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Default value: empty. Valid values:
   * 
   * - **All**: All categories.
   * - **RiskDomain**: Risky domain names.
   * - **RiskIP**: Risky IP addresses.
   * - **AliYun**: Alibaba Cloud services.
   * - **NotAliYun**: Non-Alibaba Cloud services.
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * Settings for the page number to return for a paging query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The source of the traffic statistics. Default value: internet. Valid values:
   * 
   * - **internet**: Internet firewall.
   * - **nat**: NAT firewall.
   * 
   * @example
   * nat
   */
  dataType?: string;
  /**
   * @remarks
   * The domain name for outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies the end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to collect statistics only on traffic that accesses AI services. Default value: false. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @remarks
   * The language of the request message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the sort order. Valid values:
   * 
   * - **asc**: Ascending order.
   * - **desc** (default): Descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * Settings for the number of entries to return on each page for a paging query. Default value: 6. Maximum value: 100. If the specified value exceeds 100, the value 100 is used.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The public IP address of the ECS instance that initiates the outbound connection.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * Specifies the field by which to sort the query results. Valid values:
   * 
   * - **SessionCount** (default): Number of requests.
   * - **TotalBytes**: Total traffic volume.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * Specifies the start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the intelligence label. Valid values:
   * 
   * - **AliYun**: Alibaba Cloud services.
   * - **RiskDomain**: Risky domain names.
   * - **RiskIP**: Risky IP addresses.
   * - **TrustedDomain**: Trusted websites.
   * - **AliPay**: Alipay.
   * - **DingDing**: DingTalk.
   * - **WeChat**: WeChat.
   * - **QQ**: Tencent QQ.
   * - **SecurityService**: Security services.
   * - **Microsoft**: Microsoft.
   * - **Amazon**: Amazon.
   * - **Pan**: Cloud storage.
   * - **Map**: Maps.
   * - **Code**: Code hosting.
   * - **SystemService**: System services.
   * - **Taobao**: Taobao.
   * - **Google**: Google.
   * - **ThirdPartyService**: Third-party platform services.
   * - **FirstFlow**: First visit.
   * - **Downloader**: Malicious downloads.
   * - **Alexa Top1M**: Popular websites.
   * - **Miner**: Miner pools.
   * - **Intelligence**: Threat intelligence.
   * - **DDoS**: DDoS trojans.
   * - **Ransomware**: Ransomware.
   * - **Spyware**: Spyware.
   * - **Rogue**: Rogue software.
   * - **Botnet**: Botnets.
   * - **Suspicious**: Suspicious websites.
   * - **C&C**: Remote control.
   * - **Gang**: Gangs.
   * - **CVE**: CVE vulnerabilities.
   * - **Backdoor**: Backdoor trojans.
   * - **Phishing**: Phishing websites.
   * - **APT**: APT attacks.
   * - **Supply Chain Attack**: Supply chain attacks.
   * - **Malicious software**: Malware.
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

