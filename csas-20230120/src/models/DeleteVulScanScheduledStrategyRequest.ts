// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVulScanScheduledStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled vulnerability scanning policy to delete. You can obtain the value from the following operations:
   * - [ListVulScanScheduledStrategies](~~ListVulScanScheduledStrategies~~): Lists scheduled vulnerability scanning policies.
   * - [CreateVulScanScheduledStrategy](~~CreateVulScanScheduledStrategy~~): Creates a scheduled vulnerability scanning policy.
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

