// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVirusScanScheduledStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the virus scheduled scan policies to delete. The collection must contain at least 1 and at most 100 IDs. Duplicate IDs are not allowed.
   * 
   * This parameter is required.
   */
  strategyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.strategyIds)) {
      $dara.Model.validateArray(this.strategyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

