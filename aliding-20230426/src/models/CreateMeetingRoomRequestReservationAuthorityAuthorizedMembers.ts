// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers extends $dara.Model {
  memberId?: string;
  memberName?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberName: 'MemberName',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberName: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

