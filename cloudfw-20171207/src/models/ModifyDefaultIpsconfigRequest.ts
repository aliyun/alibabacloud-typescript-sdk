// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefaultIPSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Basic Policies. Valid values:
   * 
   * - **1**: Enable.
   * 
   * - **0**: shutdown.
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Specifies whether to enable threat intelligence. Valid values:
   * 
   * - **1**: Enable.
   * 
   * - **0**: Disable.
   * 
   * @example
   * 0
   */
  ctiRules?: number;
  /**
   * @remarks
   * The language type of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The daily traffic limit for sensitive data detection.
   * 
   * @example
   * 100
   */
  maxSdl?: number;
  /**
   * @remarks
   * Specifies whether to enable virtual patches. Valid values:
   * 
   * - **1**: Enable.
   * 
   * - **0**: Disable.
   * 
   * @example
   * 1
   */
  patchRules?: number;
  /**
   * @remarks
   * The IPS rules group. Valid values:
   * 
   * - **1**: Loose rule group.
   * 
   * - **2**: Medium rule group.
   * 
   * - **3**: Strict rule group.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The IPS defense mode. Valid values:
   * 
   * - **1**: Block Mode.
   * 
   * - **0**: monitor mode.
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

