// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The types of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger. You can specify only one of the Categories and Category parameters. We recommend that you specify Categories.
   * 
   * @example
   * ["TimerTrigger"、"EventTrigger"]
   */
  categories?: string;
  /**
   * @remarks
   * The type of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger.
   * 
   * @example
   * Other
   */
  category?: string;
  /**
   * @remarks
   * The depth of execution. Valid values: RootDepth and FirstChildDepth. If you set this parameter to RootDepth, only the parent execution is returned. If you set this parameter to FirstChildDepth, only the child executions at the first level are returned. You can specify only one of the Depth and IncludeChildExecution parameters. We recommend that you specify Depth.
   * 
   * @example
   * RootDepth
   */
  depth?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * MyDescription
   */
  description?: string;
  /**
   * @remarks
   * The earliest end time. The executions that stop running at or later than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateAfter?: string;
  /**
   * @remarks
   * The latest end time. The executions that stop running at or earlier than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateBefore?: string;
  /**
   * @remarks
   * The executor.
   * 
   * @example
   * vme
   */
  executedBy?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * Specifies whether to include child executions. Default value: False.
   * 
   * @example
   * true
   */
  includeChildExecution?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   **Automatic**
   * *   **Debug**
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) resource.
   * 
   * @example
   * i-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource template.
   * 
   * @example
   * ACS-ECS-TEST
   */
  resourceTemplateName?: string;
  /**
   * @remarks
   * The field that is used to sort the executions to query. Valid values:
   * 
   * *   **StartDate**: specifies that the executions are sorted based on the time when they are created. This is the default value.
   * *   **EndDate**: specifies that the executions are sorted based on the time when they stop running.
   * *   **Status**: specifies that the executions are sorted based on their states.
   * 
   * @example
   * StartDate
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The earliest start time. The executions that start to run at or later than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateAfter?: string;
  /**
   * @remarks
   * The latest start time. The executions that start to run at or earlier than the specified point in time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateBefore?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Running, Started, Success, Failed, Waiting, Cancelled, Pending, and Skipped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags for the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The name of the template. All templates whose names contain the specified template name are queried.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      category: 'Category',
      depth: 'Depth',
      description: 'Description',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      category: 'string',
      depth: 'string',
      description: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      tagsShrink: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

