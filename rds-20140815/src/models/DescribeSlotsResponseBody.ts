// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlotsResponseBodySlots extends $dara.Model {
  database?: string;
  plugin?: string;
  slotName?: string;
  slotStatus?: string;
  slotType?: string;
  subReplayLag?: string;
  temporary?: string;
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
  requestId?: string;
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

