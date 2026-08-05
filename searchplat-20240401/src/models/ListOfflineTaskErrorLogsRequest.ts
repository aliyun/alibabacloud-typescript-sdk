// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfflineTaskErrorLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp in seconds. If not specified, the current time is used by default.
   * 
   * @example
   * 1760530000
   */
  endTime?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start timestamp in seconds. If not specified, the time one hour before the current time is used by default.
   * 
   * @example
   * 1762946698
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      regionId: 'regionId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

