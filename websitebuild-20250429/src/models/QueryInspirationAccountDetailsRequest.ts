// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationAccountDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * Query End Time
   * 
   * @example
   * 2025-07-23T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type: ASC|DESC
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * Page number, default is 1
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size, default is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Source type filter (such as FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, PURCHASED)
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * Query Start Time
   * 
   * @example
   * 2025-06-21T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
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
      sourceType: 'string',
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

