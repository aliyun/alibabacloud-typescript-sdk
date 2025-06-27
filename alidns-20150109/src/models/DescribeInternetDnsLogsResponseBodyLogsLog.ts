// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInternetDnsLogsResponseBodyLogsLogValue } from "./DescribeInternetDnsLogsResponseBodyLogsLogValue";


export class DescribeInternetDnsLogsResponseBodyLogsLog extends $dara.Model {
  /**
   * @remarks
   * Parse log ID (can be duplicated).
   * 
   * @example
   * 3583
   */
  dnsMsgId?: string;
  /**
   * @remarks
   * Parse timestamp.
   * 
   * @example
   * 1709196249000
   */
  logTime?: number;
  /**
   * @remarks
   * The protocol type of the domain name resolution query request:
   * - UDP
   * - TCP
   * - HTTP
   * - HTTPS
   * - DOH
   * 
   * @example
   * UDP
   */
  protocol?: string;
  /**
   * @remarks
   * The domain name for which you want to query Domain Name System (DNS) records.
   * 
   * @example
   * example.com
   */
  queryName?: string;
  /**
   * @remarks
   * Record type.
   * 
   * @example
   * A
   */
  queryType?: string;
  /**
   * @remarks
   * Parse response time.
   * 
   * @example
   * 0
   */
  rt?: number;
  /**
   * @remarks
   * Parse server IP.
   * 
   * @example
   * 140.205.XX.XX
   */
  serverIp?: string;
  /**
   * @remarks
   * Source IP address.
   * 
   * @example
   * 59.82.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * Response status.
   * 
   * @example
   * NOERROR
   */
  status?: string;
  /**
   * @remarks
   * The value set for the edns-client-subnet option.
   * 
   * @example
   * 170.33.XX.XX
   */
  subnetIp?: string;
  /**
   * @remarks
   * Array of parsing results.
   */
  value?: DescribeInternetDnsLogsResponseBodyLogsLogValue;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      dnsMsgId: 'DnsMsgId',
      logTime: 'LogTime',
      protocol: 'Protocol',
      queryName: 'QueryName',
      queryType: 'QueryType',
      rt: 'Rt',
      serverIp: 'ServerIp',
      sourceIp: 'SourceIp',
      status: 'Status',
      subnetIp: 'SubnetIp',
      value: 'Value',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsMsgId: 'string',
      logTime: 'number',
      protocol: 'string',
      queryName: 'string',
      queryType: 'string',
      rt: 'number',
      serverIp: 'string',
      sourceIp: 'string',
      status: 'string',
      subnetIp: 'string',
      value: DescribeInternetDnsLogsResponseBodyLogsLogValue,
      zoneName: 'string',
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

