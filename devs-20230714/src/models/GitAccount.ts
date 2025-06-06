// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GitAccount extends $dara.Model {
  /**
   * @example
   * https://gitee.com/assets/no_portrait.png
   */
  avatar?: string;
  /**
   * @example
   * your_displayname
   */
  displayName?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * your_username
   */
  name?: string;
  /**
   * @example
   * https://gitlab.com
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      displayName: 'displayName',
      id: 'id',
      name: 'name',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

