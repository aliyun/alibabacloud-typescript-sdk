// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkChannelResponseBodyChannelInfos extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * ch4
   */
  channelName?: string;
  /**
   * @remarks
   * The ID of the source cluster.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The notes about the channel.
   * 
   * @example
   * test update
   */
  notes?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * @example
   * pc-*************
   */
  targetDBClusterId?: string;
  /**
   * @remarks
   * The IP address of the target cluster.
   * 
   * @example
   * 33.*.*.240
   */
  targetIp?: string;
  /**
   * @remarks
   * The port of the target cluster.
   * 
   * @example
   * 3389
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the target cluster.
   * 
   * @example
   * polardb_for_postgresql
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the VPC that contains the endpoint.
   * 
   * @example
   * vpc-2ze13g2c6j7j2jl*******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      DBClusterId: 'DBClusterId',
      notes: 'Notes',
      regionId: 'RegionId',
      targetDBClusterId: 'TargetDBClusterId',
      targetIp: 'TargetIp',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      DBClusterId: 'string',
      notes: 'string',
      regionId: 'string',
      targetDBClusterId: 'string',
      targetIp: 'string',
      targetPort: 'string',
      targetType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of network channels.
   */
  channelInfos?: DescribeNetworkChannelResponseBodyChannelInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelInfos: 'ChannelInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfos: { 'type': 'array', 'itemType': DescribeNetworkChannelResponseBodyChannelInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelInfos)) {
      $dara.Model.validateArray(this.channelInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

