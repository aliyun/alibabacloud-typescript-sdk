// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Default value: empty. Valid values:
   * 
   * - **All**: All categories.
   * - **RiskDomain**: Risky domain category.
   * - **RiskIP**: Risky IP category.
   * - **AliYun**: Alibaba Cloud product category.
   * - **NotAliYun**: Non-Alibaba Cloud product category.
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The page number of the results to return in a paged query.
   * 
   * Default value: 1, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The source of the traffic statistics. Default value: Internet firewall. Valid values:
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
   * The domain name of outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
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
   * The language type of the request message. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: ascending order.
   * - **desc** (default): descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * Default value: 6. Maximum value: 100.
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
   * The field by which to sort the results. Valid values:
   * 
   * - **SessionCount** (default): the number of requests.
   * - **TotalBytes**: the total traffic volume.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The intelligence tags label ID. Valid values:
   * 
   * - **AliYun**: Alibaba Cloud product.
   * - **RiskDomain**: Risky domain.
   * - **RiskIP**: Risky IP.
   * - **TrustedDomain**: Trusted website.
   * - **AliPay**: Alipay.
   * - **DingDing**: DingTalk.
   * - **WeChat**: WeChat.
   * - **QQ**: Tencent QQ.
   * - **SecurityService**: Security service.
   * - **Microsoft**: Microsoft.
   * - **Amazon**: Amazon.
   * - **Pan**: Cloud drive.
   * - **Map**: Map.
   * - **Code**: Code hosting.
   * - **SystemService**: System service.
   * - **Taobao**: Taobao.
   * - **Google**: Google.
   * - **ThirdPartyService**: Third-party platform service.
   * - **FirstFlow**: First Visit.
   * - **Downloader**: Malicious download.
   * - **Alexa Top1M**: Popular website.
   * - **Miner**: Miner Pool.
   * - **Intelligence**: Threat intelligence.
   * - **DDoS**: DDoS Trojan.
   * - **Ransomware**: Ransomware.
   * - **Spyware**: Spyware.
   * - **Rogue**: Rogue software.
   * - **Botnet**: Botnets.
   * - **Suspicious**: Suspicious website.
   * - **C&C**: Remote control.
   * - **Gang**: Gang.
   * - **CVE**: CVE vulnerability.
   * - **Backdoor**: Backdoor Trojan.
   * - **Phishing**: Phishing website.
   * - **APT**: APT attack.
   * - **Supply Chain Attack**: Supply chain attack.
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

