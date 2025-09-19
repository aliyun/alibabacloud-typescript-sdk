// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstallCaptchaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The installation verification code for you to manually install the Security Center agent.
   * 
   * @example
   * M1HH**
   */
  captchaCode?: string;
  /**
   * @remarks
   * The validity period of the installation verification code.
   * 
   * >  The installation verification code is valid only within the validity period. An expired installation verification code cannot be used to install the agent.
   * 
   * @example
   * 2020-10-10 16:06:38
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      captchaCode: 'CaptchaCode',
      deadline: 'Deadline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaCode: 'string',
      deadline: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

