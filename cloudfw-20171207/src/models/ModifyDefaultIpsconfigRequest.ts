// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefaultIPSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable basic protection. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Specifies whether to enable threat intelligence. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  ctiRules?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum amount of traffic that can be processed by the sensitive data leak detection feature each day.
   * 
   * @example
   * 100
   */
  maxSdl?: number;
  /**
   * @remarks
   * Specifies whether to enable virtual patching. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  patchRules?: number;
  /**
   * @remarks
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose
   * *   **2**: medium
   * *   **3**: strict
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      ctiRules: 'CtiRules',
      lang: 'Lang',
      maxSdl: 'MaxSdl',
      patchRules: 'PatchRules',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      ctiRules: 'number',
      lang: 'string',
      maxSdl: 'number',
      patchRules: 'number',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

