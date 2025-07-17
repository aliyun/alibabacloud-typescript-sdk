// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumDataForPageRequest extends $dara.Model {
  /**
   * @remarks
   * The group to which the application belongs.
   * 
   * @example
   * default
   */
  appGroup?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time is accurate to seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713774233
   */
  endTime?: number;
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
   * The application ID.
   * 
   * @example
   * iixxxjcnuk@582846f37******
   */
  pid?: string;
  /**
   * @remarks
   * A query statement that complies with the query syntax of Simple Log Service Logstore. For more information, see the parameters corresponding to this operation on the console page.
   * 
   * This parameter is required.
   * 
   * @example
   * * and app.id: xxxx@586810fbxxxx19f
   */
  query?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is accurate to seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713687833
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pid: 'Pid',
      query: 'Query',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      pid: 'string',
      query: 'string',
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

