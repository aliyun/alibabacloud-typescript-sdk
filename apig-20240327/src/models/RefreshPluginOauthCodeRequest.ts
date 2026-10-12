// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshPluginOAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code returned by the Codeup OAuth authorization callback (the code parameter carried in the callback after authorization at https://codeup.aliyun.com/oauth/authorize?app_id=xxx&state=apigw). If this parameter is empty, the ErrInvalidParameterWithEmpty("oauth code") error is returned.
   * 
   * @example
   * 4/0AX4xxxx
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

