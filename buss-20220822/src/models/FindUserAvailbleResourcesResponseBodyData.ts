// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FindUserAvailbleResourcesResponseBodyDataPegCoordinates } from "./FindUserAvailbleResourcesResponseBodyDataPegCoordinates";
import { FindUserAvailbleResourcesResponseBodyDataUserInfo } from "./FindUserAvailbleResourcesResponseBodyDataUserInfo";


export class FindUserAvailbleResourcesResponseBodyData extends $dara.Model {
  pegCoordinates?: FindUserAvailbleResourcesResponseBodyDataPegCoordinates[];
  userInfo?: FindUserAvailbleResourcesResponseBodyDataUserInfo;
  static names(): { [key: string]: string } {
    return {
      pegCoordinates: 'PegCoordinates',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pegCoordinates: { 'type': 'array', 'itemType': FindUserAvailbleResourcesResponseBodyDataPegCoordinates },
      userInfo: FindUserAvailbleResourcesResponseBodyDataUserInfo,
    };
  }

  validate() {
    if(Array.isArray(this.pegCoordinates)) {
      $dara.Model.validateArray(this.pegCoordinates);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

