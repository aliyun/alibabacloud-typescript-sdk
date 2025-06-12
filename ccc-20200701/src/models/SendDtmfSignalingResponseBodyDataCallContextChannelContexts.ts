// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDtmfSignalingResponseBodyDataCallContextChannelContexts extends $dara.Model {
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
   * ch:user:131888****->8001****:1609234221870:job-6573574060089****
   */
  channelId?: string;
  /**
   * @example
   * ANSWERED
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
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @example
   * 0101234****
   */
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 1609234222367
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

