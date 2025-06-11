// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataIncrTransferConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enableIncrSyncStatistics?: boolean;
  /**
   * @example
   * true
   */
  enableSequencingWithinTxn?: boolean;
  /**
   * @example
   * 64
   */
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  /**
   * @example
   * 1681004708
   */
  startTimestamp?: number;
  /**
   * @example
   * 24
   */
  storeLogKeptHour?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordTypeWhiteList)) {
      $dara.Model.validateArray(this.recordTypeWhiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

