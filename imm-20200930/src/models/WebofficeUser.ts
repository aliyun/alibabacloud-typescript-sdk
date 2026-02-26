// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebofficeUser extends $dara.Model {
  /**
   * @remarks
   * The custom URL of the avatar picture. The avatar picture is displayed on the WebOffice page.
   * 
   * @example
   * http://example.com/?id=user1
   */
  avatar?: string;
  /**
   * @remarks
   * The custom user ID. The user ID is displayed on the WebOffice page. A user ID can contain letters and digits and cannot exceed 15 characters in length.
   * 
   * @example
   * user1
   */
  id?: string;
  /**
   * @remarks
   * The custom username. The username is displayed on the WebOffice page. The username must meet the following requirements:
   * 
   * *   A username can contain digits, letters, hyphens (-), underscores (_), plus signs (+), forward slashes (/), equal signs (=), and at signs (@).
   * *   A username can contain up to 32 characters.
   * 
   * @example
   * test-user1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

