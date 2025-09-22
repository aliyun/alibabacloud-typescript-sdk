// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySignInRecordPopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      endTime: 'string',
      pageNum: 'number',
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

