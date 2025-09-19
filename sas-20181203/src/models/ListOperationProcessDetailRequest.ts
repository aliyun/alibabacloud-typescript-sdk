// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationProcessDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1731555850000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1731469330000
   */
  startTime?: number;
  /**
   * @remarks
   * The subtask status codes.
   */
  statusCodes?: number[];
  /**
   * @remarks
   * The IDs of operation tasks.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      statusCodes: 'StatusCodes',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
      statusCodes: { 'type': 'array', 'itemType': 'number' },
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusCodes)) {
      $dara.Model.validateArray(this.statusCodes);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

