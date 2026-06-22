// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityStatInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member account in the resource folder. This parameter is used by the multi-account security management feature of Security Center to query the security information of specified member accounts.
   * 
   * @example
   * 12345
   */
  resourceDirectoryAccountId?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceDirectoryAccountId: 'string',
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

