// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainAccessLogsResponseBodyAccessLogs extends $dara.Model {
  /**
   * @remarks
   * The action taken upon a rule hit.
   * 
   * @example
   * WhiteList
   */
  blockAction?: string;
  /**
   * @remarks
   * The department.
   * 
   * @example
   * IT department
   */
  department?: string;
  /**
   * @remarks
   * The destination URL accessed.
   * 
   * @example
   * https://www.example.com/a
   */
  destAddress?: string;
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 2026-08-10 14:03:22
   */
  eventTime?: string;
  /**
   * @remarks
   * The Layer 4 protocol type.
   * 
   * @example
   * tcp
   */
  l4ProtocolType?: string;
  /**
   * @remarks
   * The name of the client process that initiated the access.
   * 
   * @example
   * chrome.exe
   */
  processName?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 1.2.3.4
   */
  remoteAddress?: string;
  /**
   * @remarks
   * The destination domain name.
   * 
   * @example
   * www.example.com
   */
  remoteHost?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 443
   */
  remotePort?: string;
  /**
   * @remarks
   * The source address of the client.
   * 
   * @example
   * 10.0.0.5
   */
  srcAddress?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      blockAction: 'BlockAction',
      department: 'Department',
      destAddress: 'DestAddress',
      eventTime: 'EventTime',
      l4ProtocolType: 'L4ProtocolType',
      processName: 'ProcessName',
      remoteAddress: 'RemoteAddress',
      remoteHost: 'RemoteHost',
      remotePort: 'RemotePort',
      srcAddress: 'SrcAddress',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockAction: 'string',
      department: 'string',
      destAddress: 'string',
      eventTime: 'string',
      l4ProtocolType: 'string',
      processName: 'string',
      remoteAddress: 'string',
      remoteHost: 'string',
      remotePort: 'string',
      srcAddress: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainAccessLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of access log records.
   */
  accessLogs?: ListDomainAccessLogsResponseBodyAccessLogs[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 019F68B6-A17E-5ECD-B053-820242E5ADBF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the query conditions.
   * 
   * @example
   * 122
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      accessLogs: 'AccessLogs',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogs: { 'type': 'array', 'itemType': ListDomainAccessLogsResponseBodyAccessLogs },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessLogs)) {
      $dara.Model.validateArray(this.accessLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

