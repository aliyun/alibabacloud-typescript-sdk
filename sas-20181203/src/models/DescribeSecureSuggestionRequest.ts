// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecureSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * The old or new version of the security score rule. If you set this parameter to **home_security_score**, the new version of the security score rule is returned. Otherwise, the old version of the security score rule is returned.
   * 
   * @example
   * home_security_score
   */
  calType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Source of security score, default is Cloud Security Center if left empty. Enum values: 
   * 
   * - 0:Cloud Security Center. 
   * 
   * - 1:Yaochi Console.
   * 
   * @example
   * 0
   */
  source?: number;
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
      calType: 'CalType',
      lang: 'Lang',
      source: 'Source',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calType: 'string',
      lang: 'string',
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

