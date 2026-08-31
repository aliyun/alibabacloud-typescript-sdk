// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHivesRequest extends $dara.Model {
  /**
   * @remarks
   * The time range filter parameter. Specify the time in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The cloud application service group ID.
   * 
   * @example
   * g-xxxx
   */
  hiveId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test001
   */
  name?: string;
  /**
   * @remarks
   * The page number of the query list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hiveId: 'HiveId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hiveId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

