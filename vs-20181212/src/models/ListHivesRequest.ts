// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHivesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time follows the ISO 8601 standard and must be in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the cloud application service group.
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
   * The page number of the list to query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Settings for the number of entries per page during paging in a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard and includes the time zone offset. Format: YYYY-MM-DDTHH:mm:ss+HH:mm.
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

