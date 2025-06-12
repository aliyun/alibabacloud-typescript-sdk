// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedialCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * COACHING
   */
  channelFlags?: string;
  /**
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-653821410368****
   */
  channelId?: string;
  /**
   * @example
   * CREATED
   */
  channelState?: string;
  /**
   * @example
   * 8001****
   */
  destination?: string;
  /**
   * @example
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @example
   * 1318888****
   */
  originator?: string;
  /**
   * @example
   * 139xxxx0501
   */
  releaseInitiator?: string;
  /**
   * @example
   * 486:USER_BUSY
   */
  releaseReason?: string;
  /**
   * @example
   * 1609138903315
   */
  timestamp?: number;
  /**
   * @example
   * 8000****
   */
  userExtension?: string;
  /**
   * @example
   * samzhang@abc
   */
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

