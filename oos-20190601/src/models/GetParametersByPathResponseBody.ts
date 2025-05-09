// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetParametersByPathResponseBodyParameters } from "./GetParametersByPathResponseBodyParameters";


export class GetParametersByPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the common parameters.
   */
  parameters?: GetParametersByPathResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25156E99-7437-4590-AA58-2ACA17DE405C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
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
      parameters: { 'type': 'array', 'itemType': GetParametersByPathResponseBodyParameters },
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

