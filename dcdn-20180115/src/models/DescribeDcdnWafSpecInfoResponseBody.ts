// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafSpecInfoResponseBodySpecInfosConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration code of the protection rule.
   * 
   * @example
   * enable
   */
  config?: string;
  /**
   * @remarks
   * The configuration expression of the protection rule.
   * 
   * @example
   * equal
   */
  expr?: string;
  /**
   * @remarks
   * The value of the configuration expression of the protection rule.
   * 
   * @example
   * on
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      expr: 'Expr',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      expr: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafSpecInfoResponseBodySpecInfos extends $dara.Model {
  /**
   * @remarks
   * The configuration information of the protection rule.
   */
  configs?: DescribeDcdnWafSpecInfoResponseBodySpecInfosConfigs[];
  /**
   * @remarks
   * The type of the protection policy. Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom
   * *   whitelist: whitelist
   * *   ip_blacklist: IP address blacklist
   * *   region_block: region blacklist
   * *   bot: bot management
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      defenseScene: 'DefenseScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeDcdnWafSpecInfoResponseBodySpecInfosConfigs },
      defenseScene: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafSpecInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version of WAF.
   * 
   * @example
   * dcdnwaf_afterpay
   */
  edition?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7281593a-f414-42c1-b7ba-2ce65e21cc00
   */
  requestId?: string;
  /**
   * @remarks
   * The supported types of protection policies and the configuration information of protection rules.
   */
  specInfos?: DescribeDcdnWafSpecInfoResponseBodySpecInfos[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      requestId: 'RequestId',
      specInfos: 'SpecInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      requestId: 'string',
      specInfos: { 'type': 'array', 'itemType': DescribeDcdnWafSpecInfoResponseBodySpecInfos },
    };
  }

  validate() {
    if(Array.isArray(this.specInfos)) {
      $dara.Model.validateArray(this.specInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

