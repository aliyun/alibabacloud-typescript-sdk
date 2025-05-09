// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPRequest extends $dara.Model {
  /**
   * @remarks
   * The application type in the access control policy. Valid values:
   * 
   * *   **FTP**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **Memcache**
   * *   **MongoDB**
   * *   **MQTT**
   * *   **MySQL**
   * *   **RDP**
   * *   **Redis**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **SSH**
   * *   **SSL_No_Cert**
   * *   **SSL**
   * *   **VNC**
   * 
   * >  The value of this parameter depends on the value of Proto. If you set Proto to TCP, you can set ApplicationNameList to any valid value. If you specify both ApplicationNameList and ApplicationName, only the value of ApplicationNameList is used.
   * 
   * @example
   * FTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the service to which the destination IP address belongs. This parameter is left empty by default. Valid values:
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
  /**
   * @remarks
   * The destination IP address in the outbound connection that is initiated to access a domain name.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656923760
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The method that you want to use to sort the query results. Valid values:
   * 
   * *   **asc**
   * *   **desc** (default)
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
   * The public IP address of the Elastic Compute Service (ECS) instance that initiates the outbound connection.
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
   * 1656837360
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
   * *   **FirstFlow**: the first time
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

