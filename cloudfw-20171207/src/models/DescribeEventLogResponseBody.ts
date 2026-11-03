// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The application type supported by the access control policy. We recommend that you use ApplicationNameList. Valid values:
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
   * - **SSL**
   * - **VNC**
   * - **ANY** (all application types)
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the attacked application.
   * 
   * @example
   * MySql
   */
  attackApp?: string;
  /**
   * @remarks
   * The attack type of the intrusion prevention event. Valid values:
   * - **1**: Abnormal connection.
   * - **2**: Command execution.
   * - **3**: Brute-force attack.
   * - **4**: Scanning.
   * - **5**: Other.
   * - **6**: Information leakage.
   * - **7**: DoS attack.
   * - **8**: Overflow attack.
   * - **9**: Web attack.
   * - **10**: Trojan backdoor.
   * - **11**: Viruses and worms.
   * - **12**: Mining behavior.
   * - **13**: Reverse shell.
   * 
   * @example
   * 0
   */
  attackType?: number;
  /**
   * @remarks
   * The traffic direction of the intrusion prevention event. Valid values:
   * - **in**: Inbound.
   * - **out**: Outbound.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address that is queried. This indicates that the intrusion prevention event involves this destination IP address.
   * 
   * @example
   * 2.2.2.2
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  dstPort?: number;
  /**
   * @remarks
   * The hit content.
   * 
   * @example
   * www.example.com
   */
  hitContent?: string;
  /**
   * @remarks
   * The hit type.
   * 
   * @example
   * domain
   */
  hitType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 14151892****7022
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the protection rule for the intrusion prevention event.
   * 
   * @example
   * 00000000-0000-0000-0000-000000000000
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The defense status. Valid values:
   * - **1**: Alert.
   * - **2**: Block.
   * 
   * @example
   * 0
   */
  ruleResult?: number;
  /**
   * @remarks
   * The source of the detection rule for the intrusion prevention event. Valid values:
   * - **1**: Basic protection.
   * - **2**: Virtual patches.
   * - **4**: Threat intelligence.
   * 
   * @example
   * 0
   */
  ruleSource?: number;
  /**
   * @remarks
   * The SNI used when the TLS connection is established.
   * 
   * @example
   * www.example.com
   */
  sni?: string;
  /**
   * @remarks
   * The source IP address that is queried. This indicates that the intrusion prevention event involves this source IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 20206
   */
  srcPort?: number;
  /**
   * @remarks
   * The cipher suite used for TLS handshake negotiation, such as TLS_AES_128_GCM_SHA256.
   * 
   * @example
   * TLS_AES_128_GCM_SHA256
   */
  sslCipher?: string;
  /**
   * @remarks
   * The phase in which the TLS handshake fails, such as Certificate.
   * 
   * @example
   * Certificate
   */
  sslErrorIndex?: string;
  /**
   * @remarks
   * The reason why the TLS handshake fails, such as BAD_PACKET_LENGTH.
   * 
   * @example
   * BAD_PACKET_LENGTH
   */
  sslErrorMsg?: string;
  /**
   * @remarks
   * The TLS handshake result. For example, success indicates that the handshake is successful.
   * 
   * @example
   * success
   */
  sslHandshakeRes?: string;
  /**
   * @remarks
   * The TLS version, such as TLSv1.3.
   * 
   * @example
   * TLSv1.3
   */
  sslProtocol?: string;
  /**
   * @remarks
   * The start time of the data. The value is a timestamp in seconds.
   * 
   * @example
   * 1751423362
   */
  startTime?: number;
  /**
   * @remarks
   * The document path.
   * 
   * @example
   * http://example.com/task3%DF\\"
   */
  url?: string;
  /**
   * @remarks
   * The severity level of the intrusion prevention event. Valid values:
   * - **1**: Low.
   * - **2**: Medium.
   * - **3**: High.
   * 
   * @example
   * 0
   */
  vulLevel?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      direction: 'Direction',
      dstIP: 'DstIP',
      dstPort: 'DstPort',
      hitContent: 'HitContent',
      hitType: 'HitType',
      ipProtocol: 'IpProtocol',
      memberUid: 'MemberUid',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      sni: 'Sni',
      srcIP: 'SrcIP',
      srcPort: 'SrcPort',
      sslCipher: 'SslCipher',
      sslErrorIndex: 'SslErrorIndex',
      sslErrorMsg: 'SslErrorMsg',
      sslHandshakeRes: 'SslHandshakeRes',
      sslProtocol: 'SslProtocol',
      startTime: 'StartTime',
      url: 'Url',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      attackApp: 'string',
      attackType: 'number',
      direction: 'string',
      dstIP: 'string',
      dstPort: 'number',
      hitContent: 'string',
      hitType: 'string',
      ipProtocol: 'string',
      memberUid: 'number',
      ruleId: 'string',
      ruleName: 'string',
      ruleResult: 'number',
      ruleSource: 'number',
      sni: 'string',
      srcIP: 'string',
      srcPort: 'number',
      sslCipher: 'string',
      sslErrorIndex: 'string',
      sslErrorMsg: 'string',
      sslHandshakeRes: 'string',
      sslProtocol: 'string',
      startTime: 'number',
      url: 'string',
      vulLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ISPs.
   */
  dataList?: DescribeEventLogResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D19D8F70-D64B-5A95-905A-6073BF4A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeEventLogResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

