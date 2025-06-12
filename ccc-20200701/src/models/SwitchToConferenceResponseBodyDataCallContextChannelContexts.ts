// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchToConferenceResponseBodyDataCallContextChannelContexts extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * MONITORING
   */
  channelFlags?: string;
  /**
   * @example
   * ch:user:131888****->8001****:1609225718294:job-6538214103685****
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
   * 1
   */
  index?: number;
  /**
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @example
   * 1318888****
   */
  originator?: string;
  /**
   * @example
   * 1390501****
   */
  releaseInitiator?: string;
  /**
   * @example
   * 404 - No destination
   */
  releaseReason?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 1609255716900
   */
  timestamp?: number;
  /**
   * @example
   * 8032****
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
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
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
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
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

