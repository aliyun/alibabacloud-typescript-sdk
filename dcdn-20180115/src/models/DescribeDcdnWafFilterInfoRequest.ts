// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafFilterInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy. Separate multiple types with commas (,). Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: IP address whitelist
   * 
   * >If you do not specify this parameter, all types are returned.
   * 
   * @example
   * custom_acl
   */
  defenseScenes?: string;
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * *   en: English
   * *   cn: Simplified Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

