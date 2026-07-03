// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsResponseBodyAlerts extends $dara.Model {
  /**
   * @remarks
   * The alert details.
   * 
   * @example
   * {"alert_uuid":"a3f8c2e1-9b7d-4f6a-8c2e-1d5b9a7f****"}
   */
  alertRecord?: string;
  /**
   * @remarks
   * The alert UUID.
   * 
   * @example
   * 798341271677187
   */
  alertUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertRecord: 'AlertRecord',
      alertUuid: 'AlertUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRecord: 'string',
      alertUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert details.
   */
  alerts?: ListAlertsResponseBodyAlerts[];
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alerts: 'Alerts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alerts: { 'type': 'array', 'itemType': ListAlertsResponseBodyAlerts },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alerts)) {
      $dara.Model.validateArray(this.alerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

