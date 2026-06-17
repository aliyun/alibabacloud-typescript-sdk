// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyAdvancedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * A list of IP addresses. The IP addresses must use the same protocol version. You can specify up to 100 IP addresses.
   */
  eips?: string[];
  /**
   * @remarks
   * Specifies whether to enable or disable the strict mode for access control policies. Valid values:
   * 
   * - **on**: Enables strict mode.
   * 
   * - **off**: Disables strict mode.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  internetSwitch?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
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

