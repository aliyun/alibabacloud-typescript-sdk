// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefaultIPSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Basic Policies are enabled. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: shutdown.
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Specifies whether threat intelligence is enabled. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * @example
   * 0
   */
  ctiRules?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
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
   * The maximum daily traffic limit for sensitive data detection.
   * 
   * @example
   * 100
   */
  maxSdl?: number;
  /**
   * @remarks
   * Specifies whether virtual patches are enabled. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
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
   * - **1**: Block mode.
   * 
   * - **0**: Monitor mode.
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

