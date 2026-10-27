// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMetaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the identifier of the request source. Default value: **aegis**. Valid values:
   * 
   * - **aegis**: Server Guard edition.
   * - **sas**: Security Center edition.
   * 
   * > If you use Server Guard, set this parameter to **aegis**. If you use Security Center, set this parameter to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * Specifies the language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder (Alibaba Cloud account).
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 123.168.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'number',
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

