// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 0 to 100.
   * 
   * If you do not specify this parameter or set the parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * The pagination token is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter. The next call to the operation returns results lexicographically after the NextToken parameter value.
   * 
   * You do not need to specify this parameter in your initial request.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   ASC: sorts the results in ascending order. This is the default sort order.
   * *   DES: sorts the results in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * *   CreateTime
   * *   UpdateTime
   * 
   * @example
   * 2020-11-11T06:51:17.5Z
   */
  sort?: string;
  /**
   * @remarks
   * The task status.
   * 
   * *   Ready: The task is newly created and ready.
   * *   Running: The task is running.
   * *   Failed: The task failed and cannot be automatically recovered.
   * *   Suspended: The task is suspended.
   * *   Succeeded: The task is successful.
   * 
   * @example
   * Succeed
   */
  state?: string;
  /**
   * @remarks
   * The custom tag. You can use this parameter to query tasks that have the specified tag.
   * 
   * @example
   * test=val1
   */
  tagSelector?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      state: 'State',
      tagSelector: 'TagSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      state: 'string',
      tagSelector: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

