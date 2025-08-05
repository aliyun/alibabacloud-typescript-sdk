// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyAdvancedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses. The versions of the IP addresses must be the same. You can specify a maximum of 100 IP addresses.
   */
  eips?: string[];
  /**
   * @remarks
   * Specifies whether to enable the strict mode for the access control policy. Valid values:
   * 
   * *   **on**: enables the strict mode.
   * *   **off**: disables the strict mode.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  internetSwitch?: string;
  /**
   * @remarks
   * The natural language of the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
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
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      eips: 'Eips',
      internetSwitch: 'InternetSwitch',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eips: { 'type': 'array', 'itemType': 'string' },
      internetSwitch: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eips)) {
      $dara.Model.validateArray(this.eips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

