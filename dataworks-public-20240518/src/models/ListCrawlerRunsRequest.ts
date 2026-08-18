// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlerRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the metadata crawler. You can call ListCrawlers to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
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
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The lower bound of the run start time, in millisecond-level UNIX timestamp. The value must be within the last 30 days. If not specified, the default value is 30 days before the current time.
   * 
   * @example
   * 1710239005403
   */
  startTimeFrom?: number;
  /**
   * @remarks
   * The upper bound of the run start time, in millisecond-level UNIX timestamp. The value must be within the last 30 days. If not specified, the default value is the current time.
   * 
   * @example
   * 1710325405403
   */
  startTimeTo?: number;
  /**
   * @remarks
   * The run status. Valid values: WAITING, RUNNING, SUCCESS, ERROR, SHUTDOWN.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimeFrom: 'StartTimeFrom',
      startTimeTo: 'StartTimeTo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTimeFrom: 'number',
      startTimeTo: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

