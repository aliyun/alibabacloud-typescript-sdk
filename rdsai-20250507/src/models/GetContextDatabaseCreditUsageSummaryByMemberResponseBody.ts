// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseCreditUsageSummaryByMemberResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The total credit consumption of priced records for the member. Returned as a decimal string with up to 6 decimal places. 1 credit equals 1 CNY. The value is null if there are no priced records.
   * 
   * @example
   * 0.2513
   */
  credits?: string;
  /**
   * @remarks
   * The member ID. Historical or system records may not have a member ID.
   * 
   * @example
   * mb-abcdefghijklmno
   */
  memberId?: string;
  /**
   * @remarks
   * The total metered quantity of records that match the filter criteria for the member, including unpriced records. To view the usage of a specific billable item, specify Item in the request.
   * 
   * @example
   * 12
   */
  quantity?: number;
  /**
   * @remarks
   * The number of metering records that match the filter criteria for the member, including unpriced records.
   * 
   * @example
   * 3
   */
  recordCount?: number;
  static names(): { [key: string]: string } {
    return {
      credits: 'Credits',
      memberId: 'MemberId',
      quantity: 'Quantity',
      recordCount: 'RecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credits: 'string',
      memberId: 'string',
      quantity: 'number',
      recordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseCreditUsageSummaryByMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range passed in the request, exclusive.
   * 
   * @example
   * 2026-10-08T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The member summaries on the current page, sorted in descending order of total credit consumption. Each record covers the entire query range.
   */
  items?: GetContextDatabaseCreditUsageSummaryByMemberResponseBodyItems[];
  /**
   * @remarks
   * The actual page number used for the query.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The actual number of items per page used for the query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query range passed in the request, inclusive.
   * 
   * @example
   * 2026-10-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of members that match the filter criteria. This is not the number of metering records and is not affected by pagination.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The ID of the workspace queried.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      items: 'Items',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      total: 'Total',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      items: { 'type': 'array', 'itemType': GetContextDatabaseCreditUsageSummaryByMemberResponseBodyItems },
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
      total: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

