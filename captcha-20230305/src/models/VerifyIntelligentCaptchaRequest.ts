// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyIntelligentCaptchaRequest extends $dara.Model {
  /**
   * @example
   * dsjidsjidsjkds*djsjdiskds
   */
  captchaVerifyParam?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      captchaVerifyParam: 'CaptchaVerifyParam',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaVerifyParam: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

