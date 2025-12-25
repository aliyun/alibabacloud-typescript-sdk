// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsRequest extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
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

