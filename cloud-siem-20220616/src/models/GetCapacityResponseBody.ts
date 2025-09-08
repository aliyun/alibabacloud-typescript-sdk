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

export class GetCapacityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the storage capacity.
   */
  data?: GetCapacityResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27D27DCB-D76B-5064-8B3B-0900DEF7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCapacityResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

