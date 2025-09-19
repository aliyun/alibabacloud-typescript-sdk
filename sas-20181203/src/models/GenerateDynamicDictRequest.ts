// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDynamicDictRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the dictionary.
   * 
   * @example
   * keyword
   */
  argKeywords?: string;
  /**
   * @remarks
   * The domain name for custom weak passwords.
   * 
   * @example
   * https://www.aliyun.com
   */
  domains?: string;
  /**
   * @remarks
   * The company name for custom weak passwords.
   * 
   * @example
   * Alibaba
   */
  names?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 58.248.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      argKeywords: 'ArgKeywords',
      domains: 'Domains',
      names: 'Names',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argKeywords: 'string',
      domains: 'string',
      names: 'string',
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

