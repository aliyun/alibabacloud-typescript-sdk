// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafScenesRequest extends $dara.Model {
  /**
   * @remarks
   * The types of the protection policies that you want to query. Separate multiple types with commas (,). Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: IP address whitelist
   * *   ip_blacklist: IP address blacklist
   * *   region_block: region blacklist
   * *   bot: bot management
   * 
   * > If you do not set this parameter, all types of protection policies are queried.
   * 
   * @example
   * waf_group,custom_acl,whitelist
   */
  defenseScenes?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

