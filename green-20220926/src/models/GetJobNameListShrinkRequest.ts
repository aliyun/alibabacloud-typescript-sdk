// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobNameListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @remarks
   * The query conditions. This parameter is required and must be a valid JSON query condition, such as {"TaskId":"P_11TL5T"}. Before calling this operation, call GetStockOssCheckTasksList to obtain an available TaskId. If this parameter is not provided, the API returns a 400 error.
   * 
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
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
   * The sort field.
   * 
   * @example
   * {"StartTime":"desc"}
   */
  sortShrink?: string;
  /**
   * @remarks
   * The start time in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

