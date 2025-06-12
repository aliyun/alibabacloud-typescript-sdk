// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeVisibilityResponseBodyData extends $dara.Model {
  breakCode?: string;
  /**
   * @example
   * Yealink SIP-T23G 44.84.203.6
   */
  deviceId?: string;
  /**
   * @example
   * 8001****
   */
  extension?: string;
  /**
   * @example
   * szpczf
   */
  instanceId?: string;
  /**
   * @example
   * job-330557290544431104
   */
  jobId?: string;
  /**
   * @example
   * False
   */
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  /**
   * @example
   * sam@szpczf
   */
  userId?: string;
  /**
   * @example
   * Ready
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
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
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
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
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

