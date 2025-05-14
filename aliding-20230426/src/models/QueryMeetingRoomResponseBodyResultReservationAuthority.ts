// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers } from "./QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers";


export class QueryMeetingRoomResponseBodyResultReservationAuthority extends $dara.Model {
  authorizedMembers?: QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers[];
  static names(): { [key: string]: string } {
    return {
      authorizedMembers: 'AuthorizedMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedMembers: { 'type': 'array', 'itemType': QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers },
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

