// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers } from "./CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers";


export class CreateMeetingRoomRequestReservationAuthority extends $dara.Model {
  authorizedMembers?: CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers[];
  static names(): { [key: string]: string } {
    return {
      authorizedMembers: 'AuthorizedMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedMembers: { 'type': 'array', 'itemType': CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedMembers)) {
      $dara.Model.validateArray(this.authorizedMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

