// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultIPSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Basic Policies are enabled. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: shutdown.
   * 
   * @example
   * 0
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether threat intelligence is enabled. Valid values:
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
   * The daily traffic limit for sensitive data detection.
   * 
   * @example
   * 10
   */
  maxSdl?: number;
  /**
   * @remarks
   * Indicates whether virtual patches are enabled. Valid values:
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * @example
   * 0
   */
  patchRules?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 133173B9-8010-5DF5-8B93-********
   */
  requestId?: string;
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
   * 3
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
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      ctiRules: 'CtiRules',
      maxSdl: 'MaxSdl',
      patchRules: 'PatchRules',
      requestId: 'RequestId',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      ctiRules: 'number',
      maxSdl: 'number',
      patchRules: 'number',
      requestId: 'string',
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

