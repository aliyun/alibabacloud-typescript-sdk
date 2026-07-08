// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 500. Default value: 500.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. This parameter is returned if a next page exists.
   * 
   * > If a value is returned for this parameter, a next page exists. You can use the returned **NextToken** value as a request parameter to retrieve the data on the next page. When no value is returned, all data has been retrieved.
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
   * A list of the names of the attached protected objects or protected object groups, or the IDs of the protected assets.
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
   * The total number of returned entries.
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

