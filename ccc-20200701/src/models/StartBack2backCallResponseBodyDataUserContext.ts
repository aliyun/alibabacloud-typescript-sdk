// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartBack2BackCallResponseBodyDataUserContext extends $dara.Model {
  /**
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  deviceState?: string;
  /**
   * @example
   * 8020****
   */
  extension?: string;
  /**
   * @example
   * 1618217872911
   */
  heartbeat?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * job-1034159089076****
   */
  jobId?: string;
  /**
   * @example
   * 1324730****
   */
  mobile?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * 1618217794599
   */
  reserved?: number;
  signedSkillGroupIdList?: string[];
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @example
   * OFFLINE
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

