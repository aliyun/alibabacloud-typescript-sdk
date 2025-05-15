// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the service. This parameter is empty by default. Valid values:
   * 
   * *   **All**: all services
   * *   **RiskDomain**: risky domain names
   * *   **RiskIP**: risky IP addresses
   * *   **AliYun**: Alibaba Cloud services
   * *   **NotAliYun**: third-party services
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  dataType?: string;
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
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  isAITraffic?: string;
  /**
   * @remarks
   * The language of the content within the request. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The method that is used to sort the results. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc** (default): the descending order.
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
   * The public IP address of the Elastic Compute Service (ECS) instance that initiates outbound connections.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The field based on which you want to sort the query results. Valid values:
   * 
   * *   **SessionCount** (default): the number of requests.
   * *   **TotalBytes**: the total volume of traffic.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tag. Valid values:
   * 
   * *   **AliYun**: Alibaba Cloud service
   * *   **RiskDomain**: risky domain name
   * *   **RiskIP**: risky IP address
   * *   **TrustedDomain**: trusted website
   * *   **AliPay**: Alipay
   * *   **DingDing**: DingTalk
   * *   **WeChat**: WeChat
   * *   **QQ**: Tencent QQ
   * *   **SecurityService**: security service
   * *   **Microsoft**: Microsoft
   * *   **Amazon**: Amazon Web Services (AWS)
   * *   **Pan**: cloud disk
   * *   **Map**: map
   * *   **Code**: code hosting
   * *   **SystemService**: system service
   * *   **Taobao**: Taobao
   * *   **Google**: Google
   * *   **ThirdPartyService**: third-party service
   * *   **FirstFlow**: the first time when an outbound connection is initiated
   * *   **Downloader**: malicious download
   * *   **Alexa Top1M**: popular website
   * *   **Miner**: mining pool
   * *   **Intelligence**: threat intelligence
   * *   **DDoS**: DDoS trojan
   * *   **Ransomware**: ransomware
   * *   **Spyware**: spyware
   * *   **Rogue**: rogue software
   * *   **Botnet**: botnet
   * *   **Suspicious**: suspicious website
   * *   **C\\&C**: command and control (C\\&C)
   * *   **Gang**: gang
   * *   **CVE**: Common Vulnerabilities and Exposures (CVE)
   * *   **Backdoor**: webshell
   * *   **Phishing**: phishing website
   * *   **APT**: advanced persistent threat (APT) attack
   * *   **Supply Chain Attack**: supply chain attack
   * *   **Malicious software**: malware
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

