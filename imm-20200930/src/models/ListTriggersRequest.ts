// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTriggersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 0 to 100.
   * 
   * Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of triggers is greater than the value of MaxResults, you must specify NextToken.
   * 
   * You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Default value: DESC.
   * 
   * *   ASC (default): ascending order.
   * *   DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
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
   * *   CreateTime: the point in time when the trigger is created.
   * *   UpdateTime: the most recent point in time when the trigger is updated.
   * 
   * @example
   * 2020-11-11T06:51:17.5Z
   */
  sort?: string;
  /**
   * @remarks
   * The status of the trigger. Valid values:
   * 
   * *   Ready: The trigger is ready.
   * *   Running: The trigger is running.
   * *   Failed: The trigger failed and cannot be automatically recovered.
   * *   Suspended: The trigger is suspended.
   * *   Succeeded: The trigger is complete.
   * 
   * @example
   * Succeeded
   */
  state?: string;
  /**
   * @remarks
   * The custom tag. You can specify this parameter only if you specified Tags when you called the CreateTrigger operation.
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

