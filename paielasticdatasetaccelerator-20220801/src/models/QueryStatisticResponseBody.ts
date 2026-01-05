// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStatisticResponseBody extends $dara.Model {
  instanceCapacityEachType?: { [key: string]: any };
  instanceNumEachType?: { [key: string]: any };
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  slotNumEachType?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceCapacityEachType: 'InstanceCapacityEachType',
      instanceNumEachType: 'InstanceNumEachType',
      requestId: 'RequestId',
      slotNumEachType: 'SlotNumEachType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCapacityEachType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceNumEachType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      slotNumEachType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.instanceCapacityEachType) {
      $dara.Model.validateMap(this.instanceCapacityEachType);
    }
    if(this.instanceNumEachType) {
      $dara.Model.validateMap(this.instanceNumEachType);
    }
    if(this.slotNumEachType) {
      $dara.Model.validateMap(this.slotNumEachType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

