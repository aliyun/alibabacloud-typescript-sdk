// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationConsumeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The time is a UNIX timestamp in seconds.
   * 
   * @example
   * 1762999521
   */
  endTime?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values: ASC and DESC.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 0
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
   * The scenario name.
   * 
   * @example
   * Bailingniao-Personnel Authentication
   */
  sceneName?: string;
  /**
   * @remarks
   * The start time of the query. The time is in ISO 8601 format and uses the UTC time zone (Z).
   * 
   * @example
   * 2025-10-19T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sceneName: 'SceneName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sceneName: 'string',
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

