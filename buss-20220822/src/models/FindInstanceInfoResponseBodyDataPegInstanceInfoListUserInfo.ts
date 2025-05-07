// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo extends $dara.Model {
  gcLevel?: string;
  hitWhiteReason?: string;
  userId?: string;
  userSite?: string;
  whiteUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      gcLevel: 'GcLevel',
      hitWhiteReason: 'HitWhiteReason',
      userId: 'UserId',
      userSite: 'UserSite',
      whiteUser: 'WhiteUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gcLevel: 'string',
      hitWhiteReason: 'string',
      userId: 'string',
      userSite: 'string',
      whiteUser: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

