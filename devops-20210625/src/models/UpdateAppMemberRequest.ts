// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppMemberRequestPlayer extends $dara.Model {
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

export class UpdateAppMemberRequest extends $dara.Model {
  player?: UpdateAppMemberRequestPlayer;
  roleNames?: string[];
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      player: 'player',
      roleNames: 'roleNames',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      player: UpdateAppMemberRequestPlayer,
      roleNames: { 'type': 'array', 'itemType': 'string' },
      organizationId: 'string',
    };
  }

  validate() {
    if(this.player && typeof (this.player as any).validate === 'function') {
      (this.player as any).validate();
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

