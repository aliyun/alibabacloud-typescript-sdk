// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimChatResponseBodyDataUserContext extends $dara.Model {
  /**
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @example
   * CCC-169.254.165.2-browser125.0.0-bs48b41903450e6c8
   */
  deviceId?: string;
  /**
   * @example
   * ONLINE
   */
  deviceState?: string;
  /**
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @example
   * 1609136956378
   */
  heartbeat?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * 18******102
   */
  mobile?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * false
   */
  reserved?: number;
  signedSkillGroupIdList?: string[];
  /**
   * @example
   * userId@ccc-test
   */
  userId?: string;
  /**
   * @example
   * TALKING
   */
  userState?: string;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.signedSkillGroupIdList)) {
      $dara.Model.validateArray(this.signedSkillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

