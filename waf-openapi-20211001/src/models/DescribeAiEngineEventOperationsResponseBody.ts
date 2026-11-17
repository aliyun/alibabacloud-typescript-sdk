// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventOperationsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The event processing status before the modification. Valid values:
   * 
   * - **unhandled**: Unprocessed.
   * - **handling**: Processing.
   * - **handled**: Processed.
   * 
   * @example
   * handling
   */
  fromStatus?: string;
  /**
   * @remarks
   * The time of the event operation. The time is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1792973400000
   */
  operatedAt?: number;
  /**
   * @remarks
   * The ID of the operation record.
   * 
   * @example
   * op109102
   */
  operationId?: string;
  /**
   * @remarks
   * The event processing status after the modification. Valid values:
   * 
   * - **unhandled**: Unprocessed.
   * - **handling**: Processing.
   * - **handled**: Processed.
   * 
   * @example
   * handled
   */
  toStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fromStatus: 'FromStatus',
      operatedAt: 'OperatedAt',
      operationId: 'OperationId',
      toStatus: 'ToStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromStatus: 'string',
      operatedAt: 'number',
      operationId: 'string',
      toStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEventOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of event status change records, sorted in descending order by operation time.
   */
  items?: DescribeAiEngineEventOperationsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries to return on each page during paging in a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for querying the next page. If a next page exists, this field returns a value.
   * > If this parameter returns a value, it indicates that a next page exists. You can use the returned **NextToken** as a request parameter to obtain the data on the next page until no value is returned, which indicates that all data is obtained.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A1****-1219-019A-8B44-*****9C2C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of operation records for the event.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAiEngineEventOperationsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
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

