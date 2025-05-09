// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListParametersResponseBodyParameters } from "./ListParametersResponseBodyParameters";


export class ListParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameters?: ListParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A81E4B2E-6B33-4BAE-9856-55DB7C893E01
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListParametersResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

