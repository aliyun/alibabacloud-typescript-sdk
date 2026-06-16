// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The email address to which alerts are sent.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * The execution policy.
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
   * The name of the workflow.
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
   * The Alibaba Cloud UID of the user who runs the workflow.
   * 
   * @example
   * 113***************
   */
  runAs?: string;
  /**
   * @remarks
   * The scheduling configuration.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * A JSON array of task definitions. This array contains the details for all tasks in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJsonShrink?: string;
  /**
   * @remarks
   * The degree of parallelism for tasks.
   * 
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * A JSON array of task dependencies. \\`preTaskCode\\` specifies the upstream task ID and \\`postTaskCode\\` specifies the downstream task ID. Each task must have a unique ID. For tasks without an upstream dependency, set \\`preTaskCode\\` to 0.
   * 
   * This parameter is required.
   */
  taskRelationJsonShrink?: string;
  /**
   * @remarks
   * The default timeout period for a workflow run.
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

