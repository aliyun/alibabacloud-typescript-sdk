// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulScanScheduledStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The vulnerability scheduled scan policy ID. You can obtain the value from the following operations:
   * - [ListVulScanScheduledStrategies](~~ListVulScanScheduledStrategies~~): Lists vulnerability scheduled scan policies.
   * - [CreateVulScanScheduledStrategy](~~CreateVulScanScheduledStrategy~~): Creates a vulnerability scheduled scan policy.
   * 
   * This parameter is required.
   * 
   * @example
   * vul-scan-scheduled-strategy-8a3f6c2e91b7****
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

