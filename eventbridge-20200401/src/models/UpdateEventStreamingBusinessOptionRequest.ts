// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingBusinessOptionRequest extends $dara.Model {
  /**
   * @remarks
   * The billing mode. Valid values are CapacityUnitMode for the CU mode and EventNumMode for the pay-by-event mode.
   * 
   * This parameter is required.
   * 
   * @example
   * CapacityUnitMode
   */
  businessMode?: string;
  /**
   * @remarks
   * The name of the event stream.
   * 
   * This parameter is required.
   * 
   * @example
   * rocketmq-sync
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The maximum number of CUs.
   * 
   * @example
   * 2
   */
  maxCapacityUnitCount?: number;
  /**
   * @remarks
   * The minimum number of CUs.
   * 
   * @example
   * 1
   */
  minCapacityUnitCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessMode: 'BusinessMode',
      eventStreamingName: 'EventStreamingName',
      maxCapacityUnitCount: 'MaxCapacityUnitCount',
      minCapacityUnitCount: 'MinCapacityUnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMode: 'string',
      eventStreamingName: 'string',
      maxCapacityUnitCount: 'number',
      minCapacityUnitCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

