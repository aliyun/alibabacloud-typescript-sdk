// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 500. Default value: 500.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token (Token) for the next page. If a next page exists, this field contains a value.
   * > If this parameter has a return value, a next page exists. Use the returned **NextToken** as a request parameter to retrieve the next page of data. Repeat until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAABLQv******37sHZaHk4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7BC9373-3960-53B0-8968-2B13454AE18F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of bound protected object names, protected object group names, or protected asset IDs.
   */
  resources?: string[];
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 168465
   */
  templateId?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
      templateId: 'TemplateId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      templateId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

