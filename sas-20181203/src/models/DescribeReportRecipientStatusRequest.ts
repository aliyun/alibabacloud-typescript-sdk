// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReportRecipientStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The email addresses of the contacts. Separate multiple email addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com,username@example.com
   */
  recipients?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 39.174.xxx.xxx
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recipients: 'Recipients',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recipients: 'string',
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

