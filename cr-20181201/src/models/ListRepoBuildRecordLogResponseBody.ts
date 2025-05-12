// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoBuildRecordLogResponseBodyBuildRecordLogs } from "./ListRepoBuildRecordLogResponseBodyBuildRecordLogs";


export class ListRepoBuildRecordLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log content of the image building record.
   */
  buildRecordLogs?: ListRepoBuildRecordLogResponseBodyBuildRecordLogs[];
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1000
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordLogs: 'BuildRecordLogs',
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
      buildRecordLogs: { 'type': 'array', 'itemType': ListRepoBuildRecordLogResponseBodyBuildRecordLogs },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRecordLogs)) {
      $dara.Model.validateArray(this.buildRecordLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

