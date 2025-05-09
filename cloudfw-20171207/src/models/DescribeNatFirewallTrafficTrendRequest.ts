// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp that is accurate to seconds.
   * 
   * @example
   * 1739330580
   */
  endTime?: number;
  /**
   * @remarks
   * The time interval between the data entries to return. Unit: seconds. Valid values:
   * 
   * *   **60**: 1 minute
   * *   **1800**: 30 minutes
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The private IP address of the source.
   * 
   * @example
   * 10.100.134.60
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The public IP address of the source.
   * 
   * @example
   * 47.112.210.136
   */
  srcPublicIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1739326980
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      natGatewayId: 'NatGatewayId',
      srcPrivateIP: 'SrcPrivateIP',
      srcPublicIP: 'SrcPublicIP',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      interval: 'number',
      natGatewayId: 'string',
      srcPrivateIP: 'string',
      srcPublicIP: 'string',
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

