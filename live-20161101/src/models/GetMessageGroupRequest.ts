// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the message group.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

