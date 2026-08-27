// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActiveAnnouncementsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The business ID of the notice.
   * 
   * @example
   * 1001
   */
  announcementId?: number;
  /**
   * @remarks
   * The returned content.
   * 
   * @example
   * The system will undergo maintenance tonight
   */
  content?: string;
  /**
   * @remarks
   * The user ID of the project creator.
   * 
   * @example
   * 10001
   */
  createdBy?: number;
  /**
   * @remarks
   * The display page. Valid values: ALL, FRONTEND, BACKEND.
   * 
   * @example
   * ALL
   */
  displayPage?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * LIST
   */
  displayType?: string;
  /**
   * @remarks
   * The custom effective end time.
   * 
   * @example
   * 2026-08-21T14:00:00+08:00
   */
  effectiveEnd?: string;
  /**
   * @remarks
   * The effective start time in ISO 8601 format with time zone. If this parameter is not specified, the notice takes effect immediately.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  effectiveStart?: string;
  /**
   * @remarks
   * The priority of the free task.
   * 
   * - Uses the default priority of the project, as shown in the following figure. The default priority values are as follows:
   * 
   *      - **-10**: Low. This is the default value.
   * 
   *      - **0**: Normal.
   * 
   *     - **1**: Urgent.
   * 
   *      - **2**: Very urgent.
   * 
   * ![](https://img.alicdn.com/imgextra/i1/O1CN01hNuSPz25juCzgxhmW_!!6000000007563-2-tps-2682-1304.png)
   * 
   * - Custom priority defined by the user, as shown in the following figure, with an additional "Generally urgent" level.
   * 
   * The value of this parameter is subject to the actual response of the API call. A higher priority corresponds to a larger value.
   * 
   * ![](https://img.alicdn.com/imgextra/i1/O1CN01V67b3i1mkNvJiW8D1_!!6000000004992-2-tps-2128-1126.png)
   * 
   * @example
   * GENERAL
   */
  priority?: string;
  /**
   * @remarks
   * The publish time in ISO 8601 format.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  publishedAt?: string;
  /**
   * @remarks
   * The task status. The value Running is returned upon submission.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The title of the scheduled meeting.
   * 
   * @example
   * System Maintenance Notification
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      announcementId: 'announcementId',
      content: 'content',
      createdBy: 'createdBy',
      displayPage: 'displayPage',
      displayType: 'displayType',
      effectiveEnd: 'effectiveEnd',
      effectiveStart: 'effectiveStart',
      priority: 'priority',
      publishedAt: 'publishedAt',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      announcementId: 'number',
      content: 'string',
      createdBy: 'number',
      displayPage: 'string',
      displayType: 'string',
      effectiveEnd: 'string',
      effectiveStart: 'string',
      priority: 'string',
      publishedAt: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActiveAnnouncementsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of MCP cards.
   */
  items?: ListActiveAnnouncementsResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListActiveAnnouncementsResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

