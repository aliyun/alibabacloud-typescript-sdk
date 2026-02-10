// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecureSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * Choose to query the new or old version of the security score rules. When the value is **home_security_score**, it queries the new version of the security score rules; otherwise, it defaults to querying the old version of the security score rules.
   * 
   * @example
   * home_security_score
   */
  calType?: string;
  /**
   * @remarks
   * The language type for request and response messages, default is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Resource directory member account ID (Alibaba Cloud account).
   * > You can obtain this parameter by calling the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) API.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Source of the security score. If left empty, it defaults to Cloud Security Center. Enumerated values:
   * 
   * - 0: Cloud Security Center.
   * 
   * - 1: Yaochi Console.
   * 
   * @example
   * 0
   */
  source?: number;
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
      calType: 'CalType',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      source: 'Source',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calType: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'number',
      source: 'number',
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

