// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters records by the name of the change operation. Separate multiple names with commas.
   * 
   * @example
   * RestartInstance
   */
  actionNames?: string;
  /**
   * @remarks
   * The upper bound of the query range for the change start time. The value is a UNIX timestamp in milliseconds. If you do not specify this parameter, the current time is used.
   */
  endTime?: number;
  /**
   * @remarks
   * The display type of change records. Default value: ACTION_RECORD.
   * 
   * @example
   * ACTION_RECORD
   */
  filter?: string;
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Filters records by the ID of the request that triggered the change.
   * 
   * @example
   * request-123
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records returned per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The lower bound of the query range for the change start time. The value is a UNIX timestamp in milliseconds.
   */
  startTime?: number;
  /**
   * @remarks
   * Filters records by the ID of the user that triggered the change.
   * 
   * @example
   * user-123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      endTime: 'endTime',
      filter: 'filter',
      page: 'page',
      requestId: 'requestId',
      size: 'size',
      startTime: 'startTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: 'string',
      endTime: 'number',
      filter: 'string',
      page: 'number',
      requestId: 'string',
      size: 'number',
      startTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

