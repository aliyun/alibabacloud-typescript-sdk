// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartBack2BackCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @example
   * BACK2BACK
   */
  callType?: string;
  /**
   * @example
   * MONITORING
   */
  channelFlags?: string;
  /**
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @example
   * NONE
   */
  channelState?: string;
  /**
   * @example
   * 1372168****
   */
  destination?: string;
  /**
   * @example
   * job-1034159089076****
   */
  jobId?: string;
  /**
   * @example
   * 0102157****
   */
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  /**
   * @example
   * 1618217874062
   */
  timestamp?: number;
  /**
   * @example
   * 8001****
   */
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

