// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The email address to receive alerts.
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
   * The execution policy
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
   * The code of the service.
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
   * The ID of the Alibaba Cloud account used by the user who creates the workflow.
   * 
   * @example
   * 113***************
   */
  runAs?: string;
  /**
   * @remarks
   * The scheduling settings.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The descriptions of all nodes in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJsonShrink?: string;
  /**
   * @remarks
   * The node parallelism.
   * 
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * The dependencies of all nodes in the workflow. preTaskCode specifies the ID of an upstream node, and postTaskCode specifies the ID of a downstream node. The ID of each node is unique. If a node does not have an upstream node, set preTaskCode to 0.
   * 
   * This parameter is required.
   */
  taskRelationJsonShrink?: string;
  /**
   * @remarks
   * The default timeout period of the workflow.
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

