// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDdosSpecInfoResponseBodySpecInfosConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration code of the version rule. Valid values:
   * 
   * *   **total_defense_num**: the total number of mitigation sessions of the version.
   * *   **consume_defense_num**: the number of used mitigation sessions of the version.
   * *   **max_domain_num**: the limit on the number of added domain names.
   * *   **emain_domain_num**: the number of added domain names.
   * *   **defence_package_num**: the total number of purchased additional mitigation sessions.
   * *   **consume_defence_package_num**: the number of used additional mitigation sessions.
   * 
   * @example
   * total_defense_num
   */
  config?: string;
  /**
   * @remarks
   * The configuration expression of the version rule.
   * 
   * @example
   * equal
   */
  expr?: string;
  /**
   * @remarks
   * The value of the configuration expression of the version rule.
   * 
   * @example
   * 1
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

export class DescribeDcdnDdosSpecInfoResponseBodySpecInfos extends $dara.Model {
  /**
   * @remarks
   * The configurations of the version rule.
   */
  configs?: DescribeDcdnDdosSpecInfoResponseBodySpecInfosConfigs[];
  /**
   * @remarks
   * The version rule. Valid values:
   * 
   * *   **version_defense_num**: the rule for the number of version mitigation sessions
   * *   **domain_num**: the rule for the limit on the number of domain names
   * *   **defence_package_num**: the rule for extra mitigation session plans
   * 
   * @example
   * version_defense_num
   */
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeDcdnDdosSpecInfoResponseBodySpecInfosConfigs },
      rule: 'string',
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

export class DescribeDcdnDdosSpecInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit of a single instance.
   * 
   * @example
   * 40Gbps
   */
  bandwidthLimit?: string;
  /**
   * @remarks
   * The version. Valid values:
   * 
   * * **poc**: POC Edition
   * * **basic**: Basic Edition
   * * **insurance**: Insurance Edition
   * * **unlimited**: Unlimited Edition
   * * **port_enhancement**: Special Port Enhanced Edition
   * 
   * @example
   * insurance
   */
  edition?: string;
  /**
   * @remarks
   * Specifies whether to enable DDoS mitigation. Valid values:
   * 
   * *   **on:**
   * *   **off**.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * Specifies whether custom ports are supported. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  isSpecialPort?: string;
  /**
   * @remarks
   * Protected region. Valid values:
   * 
   * * **global**: global
   * * **chinese_mainland**: Chinese mainland
   * * **global_excluding_the_chinese_mainland**: outside the Chinese mainland
   * 
   * @example
   * global
   */
  protectedArea?: string;
  /**
   * @remarks
   * The QPS limit.
   * 
   * @example
   * 100
   */
  qpsLimit?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DEA8E7BE-33C6-56F5-AC56-74D50547CF34
   */
  requestId?: string;
  /**
   * @remarks
   * The code and configurations of the security rules.
   */
  specInfos?: DescribeDcdnDdosSpecInfoResponseBodySpecInfos[];
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      edition: 'Edition',
      enable: 'Enable',
      isSpecialPort: 'IsSpecialPort',
      protectedArea: 'ProtectedArea',
      qpsLimit: 'QpsLimit',
      requestId: 'RequestId',
      specInfos: 'SpecInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      edition: 'string',
      enable: 'string',
      isSpecialPort: 'string',
      protectedArea: 'string',
      qpsLimit: 'string',
      requestId: 'string',
      specInfos: { 'type': 'array', 'itemType': DescribeDcdnDdosSpecInfoResponseBodySpecInfos },
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

