// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFCTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The trigger that corresponds to the Function Compute service.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:cdn:{RegionID}:{AccountID}:{Filter}
   */
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

