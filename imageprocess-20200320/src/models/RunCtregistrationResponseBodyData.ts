// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCTRegistrationResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/chest-ct-registration/ctctreg/2020-09-05_13%3A59%3A59_894c42d0-876a-9198-9fd9-09431fb96fad.tar.gz?Expires=1599287399&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=cWTQtdb7geuEJ46cNO%2BGGimrN****
   */
  DUrl?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/chest-ct-registration/ctctreg/2020-09-05_13%3A59%3A59_894c42d0-876a-9198-9fd9-09431fb96fad.nii.gz?Expires=1599287399&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=Tgjk1WsZFvvyIUMunxizNtivhY****
   */
  NUrl?: string;
  static names(): { [key: string]: string } {
    return {
      DUrl: 'DUrl',
      NUrl: 'NUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DUrl: 'string',
      NUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

