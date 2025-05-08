// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateRecordsResponseBodyRecordResultListFailed } from "./BatchCreateRecordsResponseBodyRecordResultListFailed";
import { BatchCreateRecordsResponseBodyRecordResultListSuccess } from "./BatchCreateRecordsResponseBodyRecordResultListSuccess";


export class BatchCreateRecordsResponseBodyRecordResultList extends $dara.Model {
  /**
   * @remarks
   * The records that failed to be created.
   */
  failed?: BatchCreateRecordsResponseBodyRecordResultListFailed[];
  /**
   * @remarks
   * The records that have been created.
   */
  success?: BatchCreateRecordsResponseBodyRecordResultListSuccess[];
  /**
   * @remarks
   * The total number of returned records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListFailed },
      success: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListSuccess },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failed)) {
      $dara.Model.validateArray(this.failed);
    }
    if(Array.isArray(this.success)) {
      $dara.Model.validateArray(this.success);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

