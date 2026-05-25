// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryUsageDurationRankResponseBodyUsageDurationList extends $dara.Model {
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * ecd-8cndajrdrd424sb99
   */
  desktopId?: string;
  /**
   * @example
   * TestName
   */
  desktopName?: string;
  /**
   * @example
   * endUserId
   */
  endUserId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
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
   * @example
   * AAAAAWvmfbFWy0uSlxZ6pIAKAnuwt1ezsRqxI6hPibm27fMH
   */
  nextToken?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 94
   */
  totalCount?: number;
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

