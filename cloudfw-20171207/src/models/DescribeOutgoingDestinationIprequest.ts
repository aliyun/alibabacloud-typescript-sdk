// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPRequest extends $dara.Model {
  /**
   * @remarks
   * The application type supported by the access control policy.
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
   * > The supported application types depend on the protocol type specified in the Proto parameter. If Proto is set to TCP, all application types listed above are supported. If both ApplicationName and ApplicationNameList are specified, the value of ApplicationNameList takes precedence.
   * 
   * @example
   * FTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the service category. Valid values:
   * 
   * - **All**: all categories
   * 
   * - **RiskDomain**: risk domains
   * 
   * - **RiskIP**: risk IPs
   * 
   * - **AliYun**: Alibaba Cloud services
   * 
   * - **NotAliYun**: services other than Alibaba Cloud services
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
   * The destination IP address of the outbound connection.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp in seconds.
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
   * 
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
   * - **asc**: ascending order.
   * 
   * - **desc** (default): descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 6. Maximum value: 10.
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
   * - **SessionCount** (default): request count.
   * 
   * - **TotalBytes**: total traffic.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656837360
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the threat intelligence tag. Valid values:
   * 
   * - **AliYun**: Alibaba Cloud service
   * 
   * - **RiskDomain**: risk domain
   * 
   * - **RiskIP**: risk IP
   * 
   * - **TrustedDomain**: trusted website
   * 
   * - **AliPay**: Alipay
   * 
   * - **DingDing**: DingTalk
   * 
   * - **WeChat**: WeChat
   * 
   * - **QQ**: Tencent QQ
   * 
   * - **SecurityService**: security service
   * 
   * - **Microsoft**: Microsoft
   * 
   * - **Amazon**: Amazon
   * 
   * - **Pan**: cloud drive
   * 
   * - **Map**: map
   * 
   * - **Code**: code hosting
   * 
   * - **SystemService**: system service
   * 
   * - **Taobao**: Taobao
   * 
   * - **Google**: Google
   * 
   * - **ThirdPartyService**: third-party service
   * 
   * - **FirstFlow**: first access
   * 
   * - **Downloader**: malicious downloader
   * 
   * - **Alexa Top1M**: popular website
   * 
   * - **Miner**: mining pool
   * 
   * - **Intelligence**: threat intelligence
   * 
   * - **DDoS**: DDoS trojan
   * 
   * - **Ransomware**: ransomware
   * 
   * - **Spyware**: spyware
   * 
   * - **Rogue**: rogue software
   * 
   * - **Botnet**: botnet
   * 
   * - **Suspicious**: suspicious website
   * 
   * - **C\\&C**: command and control (C\\&C)
   * 
   * - **Gang**: threat actor group
   * 
   * - **CVE**: CVE
   * 
   * - **Backdoor**: backdoor
   * 
   * - **Phishing**: phishing website
   * 
   * - **APT**: APT attack
   * 
   * - **Supply Chain Attack**: supply chain attack
   * 
   * - **Malicious software**: malware
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

