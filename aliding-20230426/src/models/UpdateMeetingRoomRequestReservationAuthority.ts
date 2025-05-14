// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers } from "./UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers";


export class UpdateMeetingRoomRequestReservationAuthority extends $dara.Model {
  authorizedMembers?: UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers[];
  static names(): { [key: string]: string } {
    return {
      authorizedMembers: 'AuthorizedMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedMembers: { 'type': 'array', 'itemType': UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers },
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

