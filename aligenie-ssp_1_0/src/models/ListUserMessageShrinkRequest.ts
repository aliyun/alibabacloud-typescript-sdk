// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserMessageShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2022-07-27 14:06:55.984
   */
  beforeTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      beforeTime: 'BeforeTime',
      userInfoShrink: 'UserInfo',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTime: 'string',
      userInfoShrink: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

