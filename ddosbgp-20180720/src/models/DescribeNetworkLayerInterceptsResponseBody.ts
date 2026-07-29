// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkLayerInterceptsResponseBodyInterceptionRecords extends $dara.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 47.254.56.252
   */
  destinationIp?: string;
  /**
   * @remarks
   * The destination port in the interception log.
   * 
   * @example
   * 22
   */
  destinationPort?: string;
  /**
   * @remarks
   * The interception action.
   * 
   * @example
   * drop
   */
  interceptAction?: string;
  /**
   * @remarks
   * The number of interceptions within the specified time range.
   * 
   * @example
   * 1
   */
  interceptCount?: number;
  /**
   * @remarks
   * The end time of the interception.
   *  > The value is a Unix/POSIX timestamp. Unit: seconds.
   * 
   * @example
   * 1778830500
   */
  interceptEndTime?: number;
  /**
   * @remarks
   * The packet interception module.
   * 
   * @example
   * dip_blacklist
   */
  interceptModule?: string;
  /**
   * @remarks
   * The start time of the interception.
   * > The value is a Unix/POSIX timestamp. Unit: seconds.
   * 
   * @example
   * 1778830500
   */
  interceptStartTime?: number;
  /**
   * @remarks
   * The network protocol.
   * 
   * @example
   * tcp
   */
  networkProtocol?: string;
  /**
   * @remarks
   * The network protocol number. This is a standard network protocol number.
   * 
   * @example
   * 6
   */
  protocolNumber?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 183.224.38.37
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source port in the interception log.
   * 
   * @example
   * 9998
   */
  sourcePort?: string;
  static names(): { [key: string]: string } {
    return {
      destinationIp: 'DestinationIp',
      destinationPort: 'DestinationPort',
      interceptAction: 'InterceptAction',
      interceptCount: 'InterceptCount',
      interceptEndTime: 'InterceptEndTime',
      interceptModule: 'InterceptModule',
      interceptStartTime: 'InterceptStartTime',
      networkProtocol: 'NetworkProtocol',
      protocolNumber: 'ProtocolNumber',
      sourceIp: 'SourceIp',
      sourcePort: 'SourcePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationIp: 'string',
      destinationPort: 'string',
      interceptAction: 'string',
      interceptCount: 'number',
      interceptEndTime: 'number',
      interceptModule: 'string',
      interceptStartTime: 'number',
      networkProtocol: 'string',
      protocolNumber: 'string',
      sourceIp: 'string',
      sourcePort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkLayerInterceptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of interception log records.
   * 
   * @example
   * 10
   */
  interceptionRecordCount?: number;
  /**
   * @remarks
   * The interception record details.
   */
  interceptionRecords?: DescribeNetworkLayerInterceptsResponseBodyInterceptionRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831B09F4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of interception logs that match the current filter conditions.
   * 
   * @example
   * 17
   */
  totalCnt?: string;
  static names(): { [key: string]: string } {
    return {
      interceptionRecordCount: 'InterceptionRecordCount',
      interceptionRecords: 'InterceptionRecords',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interceptionRecordCount: 'number',
      interceptionRecords: { 'type': 'array', 'itemType': DescribeNetworkLayerInterceptsResponseBodyInterceptionRecords },
      requestId: 'string',
      totalCnt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.interceptionRecords)) {
      $dara.Model.validateArray(this.interceptionRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

