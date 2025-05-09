// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDesensitizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters of the algorithm.
   */
  functionParams?: { [key: string]: string }[];
  /**
   * @remarks
   * The type of the masking algorithm.
   * 
   * Valid values:
   * 
   * *   FIX_POS : masks characters in the specified position.
   * *   DATE_ROUNDING: rounds the date.
   * *   PLAINTEXT: does not mask data.
   * *   SHA1: masks characters by using the secure hash algorithm 1 (SHA-1)
   * *   HMAC: masks characters by using the hash-based message authentication code (HMAC).
   * *   STRING_TRANSFORM: shift characters.
   * *   NUMBER_ROUNDING: rounds numbers.
   * *   AES: masks characters by using the advanced encryption standard (AES) algorithm.
   * *   SHA256: masks characters by using SHA-256 algorithm.
   * *   DES: masks characters by using the data encryption standard (DES) algorithm.
   * *   MAP_REPLACE: masks the mapped data.
   * *   FIX_CHAR: masks fixed characters.
   * *   DEFAULT: masks all characters.
   * *   RANDOM_REPLACE: randomly replaces characters.
   * *   MD5: masks characters by using the MD5 algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  functionType?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * hash algorithm
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * desensitization algorithm test
   */
  ruleName?: string;
  /**
   * @remarks
   * The masking algorithm.
   * 
   * Valid values:
   * 
   * *   PLAINTEXT
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   TRANSFORM
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ENCRYPT
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   REPLACE
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   HASH
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MASK
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * HASH
   */
  ruleType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      functionParams: 'FunctionParams',
      functionType: 'FunctionType',
      ruleDescription: 'RuleDescription',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionParams: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      functionType: 'string',
      ruleDescription: 'string',
      ruleName: 'string',
      ruleType: 'string',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functionParams)) {
      $dara.Model.validateArray(this.functionParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

