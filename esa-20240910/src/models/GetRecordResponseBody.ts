// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRecordResponseBodyRecordModel } from "./GetRecordResponseBodyRecordModel";


export class GetRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried record.
   */
  recordModel?: GetRecordResponseBodyRecordModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordModel: 'RecordModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordModel: GetRecordResponseBodyRecordModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordModel && typeof (this.recordModel as any).validate === 'function') {
      (this.recordModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

