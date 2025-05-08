// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRoutineRelatedRecordsResponseBodyRelatedRecords } from "./ListRoutineRelatedRecordsResponseBodyRelatedRecords";


export class ListRoutineRelatedRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  relatedRecords?: ListRoutineRelatedRecordsResponseBodyRelatedRecords[];
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relatedRecords: 'RelatedRecords',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      relatedRecords: { 'type': 'array', 'itemType': ListRoutineRelatedRecordsResponseBodyRelatedRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relatedRecords)) {
      $dara.Model.validateArray(this.relatedRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

