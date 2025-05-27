// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApiDestinationsResponseBodyDataApiDestinations } from "./ListApiDestinationsResponseBodyDataApiDestinations";


export class ListApiDestinationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API destinations.
   */
  apiDestinations?: ListApiDestinationsResponseBodyDataApiDestinations[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiDestinations: 'ApiDestinations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinations: { 'type': 'array', 'itemType': ListApiDestinationsResponseBodyDataApiDestinations },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiDestinations)) {
      $dara.Model.validateArray(this.apiDestinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

