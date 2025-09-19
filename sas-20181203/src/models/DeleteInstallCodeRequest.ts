// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstallCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The installation command.
   * 
   * >  You can call the [DescribeInstallCodes](~~DescribeInstallCodes~~) operation to query installation commands.
   * 
   * This parameter is required.
   * 
   * @example
   * 1q****
   */
  captchaCode?: string;
  static names(): { [key: string]: string } {
    return {
      captchaCode: 'CaptchaCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

