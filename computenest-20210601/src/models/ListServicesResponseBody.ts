// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServicesResponseBodyServices } from "./ListServicesResponseBodyServices";


export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI41
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

