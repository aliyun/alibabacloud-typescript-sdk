// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchExportTasksRequest extends $dara.Model {
  /**
   * @example
   * 2026-05-26T11:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * token-xxx
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2026-05-26T10:00:00Z
   */
  startTime?: string;
  /**
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

