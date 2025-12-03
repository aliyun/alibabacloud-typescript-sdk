// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppMembersRequestPlayerList extends $dara.Model {
  /**
   * @example
   * 1332695887xxxxxx
   */
  id?: string;
  /**
   * @example
   * User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppMembersRequest extends $dara.Model {
  playerList?: CreateAppMembersRequestPlayerList[];
  roleNames?: string[];
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      playerList: 'playerList',
      roleNames: 'roleNames',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playerList: { 'type': 'array', 'itemType': CreateAppMembersRequestPlayerList },
      roleNames: { 'type': 'array', 'itemType': 'string' },
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playerList)) {
      $dara.Model.validateArray(this.playerList);
    }
    if(Array.isArray(this.roleNames)) {
      $dara.Model.validateArray(this.roleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

