// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries to return. The default value is 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If the return value is empty, no more data is returned.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the workflow. If this parameter is not specified, workflows in the `disabled` state are returned by default. Valid values:
   * 
   * - `0`: disabled
   * 
   * - `1`: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 20
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      description: 'Description',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      description: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

