// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestReverseIncrTransferConfig extends $dara.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: string;
  storeLogKeptHour?: number;
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'string',
      storeLogKeptHour: 'number',
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordTypeWhiteList)) {
      $dara.Model.validateArray(this.recordTypeWhiteList);
    }
    if(Array.isArray(this.supportDDLTypes)) {
      $dara.Model.validateArray(this.supportDDLTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

