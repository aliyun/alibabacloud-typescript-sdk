// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchImportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the creation time range. Specify the time in RFC 3339 format.
   * 
   * @example
   * 2026-05-26T11:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The gateway instance ID. If specified, only tasks under this gateway are returned.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The maximum number of tasks to return in a single request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The start mark for the paging query.
   * 
   * @example
   * token-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the creation time range. Specify the time in RFC 3339 format.
   * 
   * @example
   * 2026-05-26T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The list of task statuses. Separate multiple statuses with commas (,).
   * 
   * @example
   * Pending,Running
   */
  statuses?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      gatewayId: 'gatewayId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      statuses: 'statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      gatewayId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      statuses: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

