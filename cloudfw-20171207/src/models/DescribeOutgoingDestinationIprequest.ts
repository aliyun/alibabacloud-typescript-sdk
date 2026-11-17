// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPRequest extends $dara.Model {
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
   * FTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The category ID. Default value: null. Valid values:
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
   * Sets the paging settings to specify the page number to return for a paged query.
   * 
   * Default value: 1, which means the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: string;
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
   * The end time of the query. The value is a UNIX timestamp accurate to seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656923760
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * The sort order. Valid values:
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
   * Sets the paging settings to specify the number of entries to return on each page for a paged query.
   * 
   * Default value: 6, which means 6 entries are returned on each page. Maximum value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The private IP address of the ECS instance that initiates the outbound connection.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIP?: string;
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
   * - **SessionCount** (default): The number of requests.
   * - **TotalBytes**: The total volume of traffic.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp accurate to seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656837360
   */
  startTime?: string;
  /**
   * @remarks
   * The intelligence tag ID. Valid values:
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
   * - **Pan**: Cloud disks.
   * - **Map**: Maps.
   * - **Code**: Code hosting.
   * - **SystemService**: System services.
   * - **Taobao**: Taobao.
   * - **Google**: Google.
   * - **ThirdPartyService**: Third-party platform services.
   * - **FirstFlow**: First visit.
   * - **Downloader**: Malicious download.
   * - **Alexa Top1M**: Popular website.
   * - **Miner**: Miner Pool.
   * - **Intelligence**: Threat intelligence.
   * - **DDoS**: DDoS Trojan.
   * - **Ransomware**: Ransomware.
   * - **Spyware**: Spyware.
   * - **Rogue**: Rogue software.
   * - **Botnet**: Botnets.
   * - **Suspicious**: Suspicious websites.
   * - **C&C**: Remote control.
   * - **Gang**: Gangs.
   * - **CVE**: CVE vulnerabilities.
   * - **Backdoor**: Backdoor Trojans.
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
      applicationName: 'ApplicationName',
      categoryId: 'CategoryId',
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      port: 'Port',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
      tagIdNew: 'TagIdNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      categoryId: 'string',
      currentPage: 'string',
      dstIP: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      port: 'string',
      privateIP: 'string',
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

