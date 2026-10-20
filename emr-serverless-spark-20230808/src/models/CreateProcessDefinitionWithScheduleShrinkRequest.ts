// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The email address for alert notifications.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * The execution strategy.
   * 
   * This parameter is required.
   * 
   * @example
   * PARALLEL
   */
  executionType?: string;
  globalParamsShrink?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @remarks
   * Specifies whether to publish the workflow.
   * 
   * @example
   * true
   */
  publish?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource queue.
   * 
   * @example
   * root_queue
   */
  resourceQueue?: string;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the execution user.
   * 
   * @example
   * 113***************
   */
  runAs?: string;
  /**
   * @remarks
   * The scheduling structure.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The JSON array of task definitions. It contains the description information of all tasks in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJsonShrink?: string;
  /**
   * @remarks
   * The task concurrency.
   * 
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * The JSON array of task dependencies. It contains the dependencies among all tasks in the workflow. preTaskCode specifies the upstream task ID, and postTaskCode specifies the downstream task ID. Each task must have a unique ID. If a task node does not have an upstream task, you must add a dependency with preTaskCode set to 0.
   * 
   * This parameter is required.
   */
  taskRelationJsonShrink?: string;
  /**
   * @remarks
   * The default timeout period for workflow execution, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      description: 'description',
      executionType: 'executionType',
      globalParamsShrink: 'globalParams',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      scheduleShrink: 'schedule',
      tagsShrink: 'tags',
      taskDefinitionJsonShrink: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJsonShrink: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      globalParamsShrink: 'string',
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      scheduleShrink: 'string',
      tagsShrink: 'string',
      taskDefinitionJsonShrink: 'string',
      taskParallelism: 'number',
      taskRelationJsonShrink: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

