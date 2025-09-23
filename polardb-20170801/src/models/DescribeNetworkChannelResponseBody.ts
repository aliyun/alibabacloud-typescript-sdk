// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkChannelResponseBodyChannelInfos extends $dara.Model {
  /**
   * @example
   * ch4
   */
  channelName?: string;
  /**
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @example
   * test update
   */
  notes?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * pc-*************
   */
  targetDBClusterId?: string;
  /**
   * @example
   * 33.*.*.240
   */
  targetIp?: string;
  /**
   * @example
   * 3389
   */
  targetPort?: string;
  /**
   * @example
   * polardb_for_postgresql
   */
  targetType?: string;
  /**
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
  channelInfos?: DescribeNetworkChannelResponseBodyChannelInfos[];
  /**
   * @remarks
   * Id of the request
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

