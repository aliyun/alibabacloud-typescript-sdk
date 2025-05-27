// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCapacityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Logstores for the threat analysis feature exist on the user side. Valid values:
   * 
   * *   true: The logs are in the normal state. The log analysis feature is available.
   * *   false: The logs are being cleared. The log analysis feature is unavailable.
   * 
   * @example
   * true
   */
  existLogStore?: boolean;
  /**
   * @remarks
   * The purchased storage capacity of the threat analysis feature. Unit: GB.
   * 
   * @example
   * 9000
   */
  preservedCapacity?: number;
  /**
   * @remarks
   * The billable storage capacity of the threat analysis feature. Unit: GB.
   * 
   * @example
   * 10
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      existLogStore: 'ExistLogStore',
      preservedCapacity: 'PreservedCapacity',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existLogStore: 'boolean',
      preservedCapacity: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

