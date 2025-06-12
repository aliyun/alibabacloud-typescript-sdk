// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeWorkModeRequest extends $dara.Model {
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @example
   * ["online-1@ccc-test","online-2@ccc-test","online-3@ccc-test","skg-default@ccc-test"]
   */
  signedSkillGroupIdList?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      mobile: 'string',
      signedSkillGroupIdList: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

