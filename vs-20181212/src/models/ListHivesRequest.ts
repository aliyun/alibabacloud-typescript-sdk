// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHivesRequest extends $dara.Model {
  /**
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @example
   * g-xxxx
   */
  hiveId?: string;
  /**
   * @example
   * test001
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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

