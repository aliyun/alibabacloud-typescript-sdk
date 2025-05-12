// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventCenterRecordResponseBodyRecords } from "./ListEventCenterRecordResponseBodyRecords";


export class ListEventCenterRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of historical events.
   * 
   * @example
   * []
   */
  records?: ListEventCenterRecordResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 665C7A5E-BAEC-5BCD-AF9F-5F9260D672BF
   */
  requestId?: string;
  /**
   * @remarks
   * The total entries of historical events.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEventCenterRecordResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

