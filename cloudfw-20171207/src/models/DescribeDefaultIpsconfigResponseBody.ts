// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultIPSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether threat intelligence is enabled. Valid values:
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
   * The maximum amount of traffic that can be processed by the sensitive data leak detection feature each day.
   * 
   * @example
   * 10
   */
  maxSdl?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
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
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose
   * *   **2**: medium
   * *   **3**: strict
   * 
   * @example
   * 3
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
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

