// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @remarks
   * The token that specifies the position where the current call returns the read data. An empty value indicates that all data has been read. You do not need to specify this parameter for the first query.
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
   * The page size.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The workflow status. Default value: 0. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The workflow ID.
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

