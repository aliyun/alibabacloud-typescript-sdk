// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithThirdUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Extension information
   * 
   * @example
   * {}
   * 
   * **if can be null:**
   * true
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * Scene code, which must be requested from Tmall Genie in advance
   * 
   * This parameter is required.
   * 
   * @example
   * wechat_ecology_openness
   */
  sceneCode?: string;
  /**
   * @remarks
   * Third-party User Identifier
   * 
   * This parameter is required.
   * 
   * @example
   * o5qxy6EItZBasv2VZAf-MGwllHL4
   */
  thirdUserIdentifier?: string;
  /**
   * @remarks
   * Third-party User Type
   * 
   * This parameter is required.
   * 
   * @example
   * weChatUser
   */
  thirdUserType?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

