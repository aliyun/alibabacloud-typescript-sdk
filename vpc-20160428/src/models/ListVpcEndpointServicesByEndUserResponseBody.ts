// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVpcEndpointServicesByEndUserResponseBodyServices } from "./ListVpcEndpointServicesByEndUserResponseBodyServices";


export class ListVpcEndpointServicesByEndUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If **NextToken** is returned, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AB1129F-32C1-5E4D-9E22-E4A859CA46EB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of entries returned.
   */
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
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
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServices },
      totalCount: 'string',
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

