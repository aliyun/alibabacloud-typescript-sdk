// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithThirdUserInfoShrinkRequest extends $dara.Model {
  /**
   * @example
   * {}
   * 
   * **if can be null:**
   * true
   */
  extInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wechat_ecology_openness
   */
  sceneCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * o5qxy6EItZBasv2VZAf-MGwllHL4
   */
  thirdUserIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * weChatUser
   */
  thirdUserType?: string;
  static names(): { [key: string]: string } {
    return {
      extInfoShrink: 'ExtInfo',
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfoShrink: 'string',
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

