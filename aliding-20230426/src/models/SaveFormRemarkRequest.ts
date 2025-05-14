// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveFormRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKxxx
   */
  appType?: string;
  /**
   * @example
   * 123456
   */
  atUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instxxxx
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instxxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * hexxxx
   */
  replyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      atUserId: 'AtUserId',
      content: 'Content',
      formInstanceId: 'FormInstanceId',
      language: 'Language',
      replyId: 'ReplyId',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      atUserId: 'string',
      content: 'string',
      formInstanceId: 'string',
      language: 'string',
      replyId: 'number',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

