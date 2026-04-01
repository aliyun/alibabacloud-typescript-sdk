// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlotsResponseBodySlots extends $dara.Model {
  /**
   * @remarks
   * The name of the database in which the replication slot resides.
   * 
   * @example
   * db_test01
   */
  database?: string;
  /**
   * @remarks
   * The extension used by the replication slot.
   * 
   * @example
   * test_decoding
   */
  plugin?: string;
  /**
   * @remarks
   * The replication slot name.
   * 
   * @example
   * slot_test01
   */
  slotName?: string;
  /**
   * @remarks
   * The replication slot status. Valid values:
   * 
   * *   ACTIVE
   * *   INACTIVE
   * 
   * @example
   * INACTIVE
   */
  slotStatus?: string;
  /**
   * @remarks
   * The replication slot type. Valid values:
   * 
   * *   physical
   * *   logical
   * 
   * @example
   * logical
   */
  slotType?: string;
  /**
   * @remarks
   * The latency of the logical subscription on the subscriber node that corresponds to the current replication slot. Unit: seconds.
   * 
   * @example
   * 0
   */
  subReplayLag?: string;
  /**
   * @remarks
   * Indicates whether the replication slot is a temporary replication slot. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  temporary?: string;
  /**
   * @remarks
   * The number of logs accumulated in the replication slot.
   * 
   * @example
   * 16 MB
   */
  walDelay?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      plugin: 'Plugin',
      slotName: 'SlotName',
      slotStatus: 'SlotStatus',
      slotType: 'SlotType',
      subReplayLag: 'SubReplayLag',
      temporary: 'Temporary',
      walDelay: 'WalDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      plugin: 'string',
      slotName: 'string',
      slotStatus: 'string',
      slotType: 'string',
      subReplayLag: 'string',
      temporary: 'string',
      walDelay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 76AF0609-4195-5DFC-BC78-3AD76FF872BB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the replication slot.
   */
  slots?: DescribeSlotsResponseBodySlots[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slots: 'Slots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slots: { 'type': 'array', 'itemType': DescribeSlotsResponseBodySlots },
    };
  }

  validate() {
    if(Array.isArray(this.slots)) {
      $dara.Model.validateArray(this.slots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

