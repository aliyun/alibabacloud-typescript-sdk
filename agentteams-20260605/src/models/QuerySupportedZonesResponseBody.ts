// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupportedZonesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupportedZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code, which is `SUCCESS` when the operation succeeds.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code, which is `200` when the operation succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of zones.
   * 
   * @example
   * [...]
   */
  items?: QuerySupportedZonesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned in this request.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message, which is `success` when the operation succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page, which is `null` because this operation does not support pagination.
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which is `null` when the operation succeeds.
   * 
   * @example
   * null
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of zones.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': QuerySupportedZonesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

