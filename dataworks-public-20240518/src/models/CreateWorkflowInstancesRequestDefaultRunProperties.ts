// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkflowInstancesRequestDefaultRunPropertiesAlert } from "./CreateWorkflowInstancesRequestDefaultRunPropertiesAlert";
import { CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis } from "./CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis";
import { CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy } from "./CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy";


export class CreateWorkflowInstancesRequestDefaultRunProperties extends $dara.Model {
  /**
   * @remarks
   * The alert settings.
   */
  alert?: CreateWorkflowInstancesRequestDefaultRunPropertiesAlert;
  /**
   * @remarks
   * The analysis of the configurations.
   */
  analysis?: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis;
  /**
   * @remarks
   * The IDs of the projects that do not need to be run.
   */
  excludeProjectIds?: number[];
  /**
   * @remarks
   * The IDs of the tasks that do not need to be run.
   */
  excludeTaskIds?: number[];
  /**
   * @remarks
   * The IDs of the projects that need to be run.
   */
  includeProjectIds?: number[];
  /**
   * @remarks
   * The IDs of the tasks that need to be run.
   */
  includeTaskIds?: number[];
  /**
   * @remarks
   * The data backfill mode. Default value: ManualSelection. Valid values:
   * 
   * *   General: You can specify only one root task ID. The `IncludeTaskIds` parameter is optional. If you do not specify the IncludeTaskIds parameter, the tasks that are specified by the `RootTaskIds` parameter are included by default.``
   * *   ManualSelection: You can specify multiple root tasks IDs. The `IncludeTaskIds` parameter is optional. If you do not specify the IncludeTaskIds parameter, the tasks that are specified by the `RootTaskIds` parameter are included by default.``
   * *   Chain: The value of the `RootTaskIds` parameter is left empty. You must set the `IncludeTaskIds` parameter to the start task ID and the end task ID.
   * *   AllDownstream: You can specify only one root task ID.``
   * 
   * @example
   * ManualSelection
   */
  mode?: string;
  /**
   * @remarks
   * The running order. Default value: Asc. Valid values:
   * 
   * *   Asc: The tasks are sorted by data timestamp in ascending order.
   * *   Desc: The tasks are sorted by data timestamp in descending order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The number of tasks that can be run in parallel. If you specify the value to 2 to 10, the value indicates the number of tasks that can be run in parallel. If you specify the value to 1, the tasks are run one by one.
   * 
   * @example
   * 2
   */
  parallelism?: number;
  /**
   * @remarks
   * The root task IDs.
   */
  rootTaskIds?: number[];
  /**
   * @remarks
   * The data backfill policy. If you leave this parameter empty, the runtime configuration is used.
   */
  runPolicy?: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy;
  /**
   * @remarks
   * The identifier of the custom resource group for scheduling. If you leave this parameter empty, the runtime configuration is used.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      analysis: 'Analysis',
      excludeProjectIds: 'ExcludeProjectIds',
      excludeTaskIds: 'ExcludeTaskIds',
      includeProjectIds: 'IncludeProjectIds',
      includeTaskIds: 'IncludeTaskIds',
      mode: 'Mode',
      order: 'Order',
      parallelism: 'Parallelism',
      rootTaskIds: 'RootTaskIds',
      runPolicy: 'RunPolicy',
      runtimeResource: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: CreateWorkflowInstancesRequestDefaultRunPropertiesAlert,
      analysis: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis,
      excludeProjectIds: { 'type': 'array', 'itemType': 'number' },
      excludeTaskIds: { 'type': 'array', 'itemType': 'number' },
      includeProjectIds: { 'type': 'array', 'itemType': 'number' },
      includeTaskIds: { 'type': 'array', 'itemType': 'number' },
      mode: 'string',
      order: 'string',
      parallelism: 'number',
      rootTaskIds: { 'type': 'array', 'itemType': 'number' },
      runPolicy: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy,
      runtimeResource: 'string',
    };
  }

  validate() {
    if(this.alert && typeof (this.alert as any).validate === 'function') {
      (this.alert as any).validate();
    }
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(Array.isArray(this.excludeProjectIds)) {
      $dara.Model.validateArray(this.excludeProjectIds);
    }
    if(Array.isArray(this.excludeTaskIds)) {
      $dara.Model.validateArray(this.excludeTaskIds);
    }
    if(Array.isArray(this.includeProjectIds)) {
      $dara.Model.validateArray(this.includeProjectIds);
    }
    if(Array.isArray(this.includeTaskIds)) {
      $dara.Model.validateArray(this.includeTaskIds);
    }
    if(Array.isArray(this.rootTaskIds)) {
      $dara.Model.validateArray(this.rootTaskIds);
    }
    if(this.runPolicy && typeof (this.runPolicy as any).validate === 'function') {
      (this.runPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

