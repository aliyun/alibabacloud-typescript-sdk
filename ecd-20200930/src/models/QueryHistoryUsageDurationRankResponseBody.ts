// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryUsageDurationRankResponseBodyUsageDurationList extends $dara.Model {
  /**
   * @remarks
   * The billing type. Valid values:
   * - POST_PAID: pay-as-you-go.
   * - PRE_PAID: subscription.
   * - MONTH_PACKAGE: monthly package.
   * - DURATION: duration-based package.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ecd-8cndajrdrd424sb99
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * TestName
   */
  desktopName?: string;
  /**
   * @remarks
   * The end user ID.
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
   * The usage duration, in seconds. This value is of the Long type. Handle precision conversion on the frontend.
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
   * The paging token for the next query.
   * 
   * @example
   * AAAAAWvmfbFWy0uSlxZ6pIAKAnuwt1ezsRqxI6hPibm27fMH
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 94
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of user usage duration metrics.
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

