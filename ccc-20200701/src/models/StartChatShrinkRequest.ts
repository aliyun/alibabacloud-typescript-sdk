// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the web service channel.
   * 
   * @example
   * cf584733-***-***-9699-cb77aa3b7aa6
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The channel token for the web service.
   * 
   * @example
   * 9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3bjEn0YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jg************Hwej7WgWrmA=
   */
  token?: string;
  /**
   * @remarks
   * The information about chat members.
   * 
   * This parameter is required.
   */
  userListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      instanceId: 'InstanceId',
      token: 'Token',
      userListShrink: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      instanceId: 'string',
      token: 'string',
      userListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

