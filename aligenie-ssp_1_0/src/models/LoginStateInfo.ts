// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginStateInfo extends $dara.Model {
  sceneCode?: string;
  thirdUserIdentifier?: string;
  thirdUserType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

