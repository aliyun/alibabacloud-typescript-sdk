// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the scheduled inspection configuration.
   * 
   * @example
   * 847268a4-196f-416b-aa12-bfe0c115****
   */
  scheduledId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduledId: 'ScheduledId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      scheduledId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

