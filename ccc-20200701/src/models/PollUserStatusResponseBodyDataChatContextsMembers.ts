// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollUserStatusResponseBodyDataChatContextsMembers extends $dara.Model {
  index?: number;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  status?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      status: 'Status',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      status: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

