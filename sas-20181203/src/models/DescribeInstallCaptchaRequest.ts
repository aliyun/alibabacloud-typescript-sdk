// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstallCaptchaRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the installation verification code. If this parameter is left empty, only valid installation verification codes are queried.
   * > The installation verification code can be used only within its validity period. An expired installation verification code cannot be used to install the Security Center Agent.
   * 
   * @example
   * 2020-10-11 16:26:22
   */
  deadline?: string;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
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

