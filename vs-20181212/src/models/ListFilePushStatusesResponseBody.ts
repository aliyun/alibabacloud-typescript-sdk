// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilePushStatusesResponseBodyPushStatuses extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The scheduled push start time.
   * 
   * @example
   * 2024-03-26T16:32:20+08:00
   */
  pushTime?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The file push status. Valid values:
   * 
   * 1. Created
   * 
   * 2. Doing
   * 
   * 3. Success: desired state
   * 
   * 4. Failed: desired state
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * push success
   */
  statusDescription?: string;
  /**
   * @remarks
   * The latest update time of the status.
   * 
   * @example
   * 2024-03-26T17:02:10+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      pushTime: 'PushTime',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      pushTime: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of file push status records.
   */
  pushStatuses?: ListFilePushStatusesResponseBodyPushStatuses[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching file push records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushStatuses: 'PushStatuses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushStatuses: { 'type': 'array', 'itemType': ListFilePushStatusesResponseBodyPushStatuses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pushStatuses)) {
      $dara.Model.validateArray(this.pushStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

