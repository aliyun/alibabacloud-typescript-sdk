// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstallCaptchaRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of verification codes. If this parameter is not specified, only the valid verification codes are returned.
   * 
   * >  An installation verification code can be used only within the validity period. An expired installation verification code cannot be used to install the Security Center agent.
   * 
   * @example
   * 2020-10-11 16:26:22
   */
  deadline?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      deadline: 'Deadline',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadline: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

