// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedialCallResponseBodyDataUserContext extends $dara.Model {
  breakCode?: string;
  deviceId?: string;
  /**
   * @example
   * 8000****
   */
  extension?: string;
  /**
   * @example
   * abc
   */
  instanceId?: string;
  /**
   * @example
   * job-6573574060089****
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
   * samzhang@abc
   */
  userId?: string;
  userState?: string;
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

