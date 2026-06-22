// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The source identifier of the request. Default value: **aegis**. Valid values:
   * 
   * - **aegis**: Server Guard edition.
   * - **sas**: Security Center edition.
   * 
   * > Server Guard users should use **aegis**, and Security Center users should use **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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
   * The ID of the member accounts in the resource directory (Alibaba Cloud account).
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The IP address of the access source.
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

