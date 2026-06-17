// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultIPSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the basic policies feature. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 0
   */
  basicRules?: number;
  /**
   * @remarks
   * The status of the threat intelligence feature. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 0
   */
  ctiRules?: number;
  /**
   * @remarks
   * The maximum daily traffic that can be scanned for sensitive data.
   * 
   * @example
   * 10
   */
  maxSdl?: number;
  /**
   * @remarks
   * The status of the virtual patching feature. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 0
   */
  patchRules?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 133173B9-8010-5DF5-8B93-********
   */
  requestId?: string;
  /**
   * @remarks
   * The strictness level of the intrusion prevention system (IPS) rules. Valid values:
   * 
   * - **1**: Loose
   * 
   * - **2**: Medium
   * 
   * - **3**: Strict
   * 
   * @example
   * 3
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * - **1**: Block Mode
   * 
   * - **0**: Monitor Mode
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

