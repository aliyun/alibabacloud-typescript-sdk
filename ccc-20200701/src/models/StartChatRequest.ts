// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartChatRequestUserList } from "./StartChatRequestUserList";


export class StartChatRequest extends $dara.Model {
  /**
   * @example
   * cf584733-***-***-9699-cb77aa3b7aa6
   */
  accessChannelId?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3bjEn0YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jg************Hwej7WgWrmA=
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userList?: StartChatRequestUserList[];
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      instanceId: 'InstanceId',
      token: 'Token',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      instanceId: 'string',
      token: 'string',
      userList: { 'type': 'array', 'itemType': StartChatRequestUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

