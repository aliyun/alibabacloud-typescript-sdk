// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryUsageDurationRankResponseBodyUsageDurationList extends $dara.Model {
  /**
   * @remarks
   * The **charge type**. Valid values: `POST_PAID` (post-paid), `PRE_PAID` (pre-paid), `MONTH_PACKAGE` (monthly subscription), and `DURATION` (duration package).
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * **The ID of the cloud desktop.**
   * 
   * @example
   * ecd-8cndajrdrd424sb99
   */
  desktopId?: string;
  /**
   * @remarks
   * **The name of the cloud desktop.**
   * 
   * @example
   * TestName
   */
  desktopName?: string;
  /**
   * @remarks
   * **The end user ID.**
   * 
   * @example
   * endUserId
   */
  endUserId?: string;
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
   * The **usage duration**, in seconds. Note: This is a `Long` value. Ensure your client can handle the precision.
   * 
   * @example
   * 20000
   */
  usageDuration?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      usageDuration: 'UsageDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopId: 'string',
      desktopName: 'string',
      endUserId: 'string',
      regionId: 'string',
      usageDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryUsageDurationRankResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to retrieve the next page of results. If this parameter is not returned, there are no more results.
   * 
   * @example
   * AAAAAWvmfbFWy0uSlxZ6pIAKAnuwt1ezsRqxI6hPibm27fMH
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching entries.
   * 
   * @example
   * 94
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of usage duration metrics.
   */
  usageDurationList?: QueryHistoryUsageDurationRankResponseBodyUsageDurationList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usageDurationList: 'UsageDurationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      usageDurationList: { 'type': 'array', 'itemType': QueryHistoryUsageDurationRankResponseBodyUsageDurationList },
    };
  }

  validate() {
    if(Array.isArray(this.usageDurationList)) {
      $dara.Model.validateArray(this.usageDurationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

