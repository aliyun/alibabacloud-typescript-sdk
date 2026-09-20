// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkLayerInterceptsRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 47.118.170.18
   */
  destinationIp?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 8080
   */
  destinationPort?: number;
  /**
   * @remarks
   * The end time of the DDoS attack event to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1563445054
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID of the Anti-DDoS Origin instance to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The interception module.
   * 
   * @example
   * src
   */
  interceptModule?: string;
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
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of interception log entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The network protocol number. This is a standard network protocol number.
   * 
   * @example
   * 6
   */
  protocolNumber?: number;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 37.60.241.154
   */
  srcIp?: string;
  /**
   * @remarks
   * The start time of the DDoS attack event to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1557305044
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      destinationIp: 'DestinationIp',
      destinationPort: 'DestinationPort',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interceptModule: 'InterceptModule',
      networkProtocol: 'NetworkProtocol',
      page: 'Page',
      pageSize: 'PageSize',
      protocolNumber: 'ProtocolNumber',
      sourcePort: 'SourcePort',
      srcIp: 'SrcIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationIp: 'string',
      destinationPort: 'number',
      endTime: 'number',
      instanceId: 'string',
      interceptModule: 'string',
      networkProtocol: 'string',
      page: 'number',
      pageSize: 'number',
      protocolNumber: 'number',
      sourcePort: 'number',
      srcIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

