// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPredictiveCallResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * []
   */
  channelFlags?: string;
  /**
   * @example
   * ch:user:131888****->8001****:1609225718294:job-6570007401392****
   */
  channelId?: string;
  /**
   * @example
   * NONE
   */
  channelState?: string;
  /**
   * @example
   * 8001****
   */
  destination?: string;
  /**
   * @example
   * job-6570007401392****
   */
  jobId?: string;
  /**
   * @example
   * 1318888****
   */
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  /**
   * @example
   * 1609225718295
   */
  timestamp?: number;
  /**
   * @example
   * 8001****
   */
  userExtension?: string;
  /**
   * @example
   * agent@ccc-test
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

