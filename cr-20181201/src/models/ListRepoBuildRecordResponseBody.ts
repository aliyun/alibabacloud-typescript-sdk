// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoBuildRecordResponseBodyBuildRecords } from "./ListRepoBuildRecordResponseBodyBuildRecords";


export class ListRepoBuildRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image building records.
   */
  buildRecords?: ListRepoBuildRecordResponseBodyBuildRecords[];
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
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
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
   * The ID of the request.
   * 
   * @example
   * 9D23DEDF-E91D-434B-B7D5-9D12C648D166
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecords: 'BuildRecords',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecords: { 'type': 'array', 'itemType': ListRepoBuildRecordResponseBodyBuildRecords },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRecords)) {
      $dara.Model.validateArray(this.buildRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

