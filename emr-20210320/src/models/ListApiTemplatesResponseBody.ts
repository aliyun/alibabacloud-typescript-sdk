// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiTemplate } from "./ApiTemplate";


export class ListApiTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of API templates.
   * 
   * @deprecated
   */
  apiTemplates?: ApiTemplate[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to use to retrieve the next page of results. This value is empty when there are no more results to return.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiTemplates: 'ApiTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTemplates: { 'type': 'array', 'itemType': ApiTemplate },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiTemplates)) {
      $dara.Model.validateArray(this.apiTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

