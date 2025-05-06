// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProcessDefinitionWithScheduleRequestGlobalParams } from "./CreateProcessDefinitionWithScheduleRequestGlobalParams";
import { CreateProcessDefinitionWithScheduleRequestSchedule } from "./CreateProcessDefinitionWithScheduleRequestSchedule";
import { CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson } from "./CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson";
import { CreateProcessDefinitionWithScheduleRequestTaskRelationJson } from "./CreateProcessDefinitionWithScheduleRequestTaskRelationJson";


export class CreateProcessDefinitionWithScheduleRequest extends $dara.Model {
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
  globalParams?: CreateProcessDefinitionWithScheduleRequestGlobalParams[];
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
  schedule?: CreateProcessDefinitionWithScheduleRequestSchedule;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The descriptions of all nodes in the workflow.
   * 
   * This parameter is required.
   */
  taskDefinitionJson?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson[];
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
  taskRelationJson?: CreateProcessDefinitionWithScheduleRequestTaskRelationJson[];
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
      globalParams: 'globalParams',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      schedule: 'schedule',
      tags: 'tags',
      taskDefinitionJson: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJson: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      globalParams: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestGlobalParams },
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      schedule: CreateProcessDefinitionWithScheduleRequestSchedule,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskDefinitionJson: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson },
      taskParallelism: 'number',
      taskRelationJson: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskRelationJson },
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.globalParams)) {
      $dara.Model.validateArray(this.globalParams);
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(Array.isArray(this.taskDefinitionJson)) {
      $dara.Model.validateArray(this.taskDefinitionJson);
    }
    if(Array.isArray(this.taskRelationJson)) {
      $dara.Model.validateArray(this.taskRelationJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

