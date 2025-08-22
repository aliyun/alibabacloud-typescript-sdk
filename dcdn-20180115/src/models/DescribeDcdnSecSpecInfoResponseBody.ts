// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSecSpecInfoResponseBodySpecInfosRuleConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration code of the security rule.
   * 
   * @example
   * custom_****_number
   */
  code?: string;
  /**
   * @remarks
   * The configuration expression of the security rule.
   * 
   * @example
   * equal
   */
  expr?: string;
  /**
   * @remarks
   * The value of the configuration expression of the security rule.
   * 
   * @example
   * 20
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expr: 'Expr',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class DescribeDcdnSecSpecInfoResponseBodySpecInfos extends $dara.Model {
  /**
   * @remarks
   * The code of the security rule.
   * 
   * @example
   * accurate_***
   */
  ruleCode?: string;
  /**
   * @remarks
   * The configurations of the security rule.
   */
  ruleConfigs?: DescribeDcdnSecSpecInfoResponseBodySpecInfosRuleConfigs[];
  static names(): { [key: string]: string } {
    return {
      ruleCode: 'RuleCode',
      ruleConfigs: 'RuleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCode: 'string',
      ruleConfigs: { 'type': 'array', 'itemType': DescribeDcdnSecSpecInfoResponseBodySpecInfosRuleConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.ruleConfigs)) {
      $dara.Model.validateArray(this.ruleConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecSpecInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32f6cbb7-13e5-403a-9941-4d4e978dd227
   */
  requestId?: string;
  /**
   * @remarks
   * The code and configurations of the security rules.
   */
  specInfos?: DescribeDcdnSecSpecInfoResponseBodySpecInfos[];
  /**
   * @remarks
   * The version of secure DCDN.
   * 
   * @example
   * enterprise
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      specInfos: 'SpecInfos',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      specInfos: { 'type': 'array', 'itemType': DescribeDcdnSecSpecInfoResponseBodySpecInfos },
      version: 'string',
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

