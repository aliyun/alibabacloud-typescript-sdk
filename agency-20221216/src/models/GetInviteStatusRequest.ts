// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInviteStatusRequestInviteStatusList extends $dara.Model {
  /**
   * @remarks
   * The invitation ID, which is obtained from the InviteSubAccount operation.
   * 
   * @example
   * 123
   */
  inviteId?: number;
  static names(): { [key: string]: string } {
    return {
      inviteId: 'InviteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusRequest extends $dara.Model {
  /**
   * @remarks
   * inviteId list
   * 
   * This parameter is required.
   */
  inviteStatusList?: GetInviteStatusRequestInviteStatusList[];
  static names(): { [key: string]: string } {
    return {
      inviteStatusList: 'InviteStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteStatusList: { 'type': 'array', 'itemType': GetInviteStatusRequestInviteStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.inviteStatusList)) {
      $dara.Model.validateArray(this.inviteStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

