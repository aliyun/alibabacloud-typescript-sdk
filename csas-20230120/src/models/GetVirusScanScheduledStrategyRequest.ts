// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirusScanScheduledStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled virus scan policy. You can obtain the value from the following operations:
   * - [ListVirusScanScheduledStrategies](~~ListVirusScanScheduledStrategies~~): Lists scheduled virus scan policies.
   * - [CreateVirusScanScheduledStrategy](~~CreateVirusScanScheduledStrategy~~): Creates a scheduled virus scan policy.
   * 
   * @example
   * vc-strategy-8a3f6c2e91b7****
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

