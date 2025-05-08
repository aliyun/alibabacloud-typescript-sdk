// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateRecordsResponseBodyRecordResultList } from "./BatchCreateRecordsResponseBodyRecordResultList";


export class BatchCreateRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The records that have been created and failed to be created.
   */
  recordResultList?: BatchCreateRecordsResponseBodyRecordResultList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordResultList: 'RecordResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordResultList: BatchCreateRecordsResponseBodyRecordResultList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordResultList && typeof (this.recordResultList as any).validate === 'function') {
      (this.recordResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

