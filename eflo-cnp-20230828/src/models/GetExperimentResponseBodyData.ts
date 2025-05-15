// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResponseBodyDataEnvParams } from "./GetExperimentResponseBodyDataEnvParams";
import { GetExperimentResponseBodyDataResource } from "./GetExperimentResponseBodyDataResource";
import { GetExperimentResponseBodyDataResults } from "./GetExperimentResponseBodyDataResults";
import { GetExperimentResponseBodyDataTask } from "./GetExperimentResponseBodyDataTask";
import { GetExperimentResponseBodyDataWorkload } from "./GetExperimentResponseBodyDataWorkload";


export class GetExperimentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-11-29 02:16:35
   */
  createTime?: number;
  /**
   * @remarks
   * Task end time
   * 
   * @example
   * 2024-11-29 02:26:35
   */
  endTime?: string;
  /**
   * @remarks
   * Running environment parameters
   */
  envParams?: GetExperimentResponseBodyDataEnvParams;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 1726882991828688898
   */
  experimentId?: number;
  /**
   * @remarks
   * Experiment name
   * 
   * @example
   * test
   */
  experimentName?: string;
  /**
   * @remarks
   * Experiment type
   * 
   * @example
   * AI
   */
  experimentType?: string;
  /**
   * @remarks
   * Parsed workload parameters
   */
  getParams?: { [key: string]: string };
  /**
   * @remarks
   * cluster info
   */
  resource?: GetExperimentResponseBodyDataResource;
  /**
   * @remarks
   * Resource name
   * 
   * @example
   * cifnews-guoyuan
   */
  resourceName?: string;
  /**
   * @remarks
   * Task results
   */
  results?: GetExperimentResponseBodyDataResults;
  /**
   * @remarks
   * Running workload parameters
   */
  setParams?: { [key: string]: string };
  /**
   * @remarks
   * Task start time
   * 
   * @example
   * 2024-11-29 02:16:35
   */
  startTime?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Experiment task
   */
  task?: GetExperimentResponseBodyDataTask;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-11-29 02:16:35
   */
  updateTime?: number;
  /**
   * @remarks
   * Workload information
   */
  workload?: GetExperimentResponseBodyDataWorkload;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      envParams: 'EnvParams',
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      experimentType: 'ExperimentType',
      getParams: 'GetParams',
      resource: 'Resource',
      resourceName: 'ResourceName',
      results: 'Results',
      setParams: 'SetParams',
      startTime: 'StartTime',
      status: 'Status',
      task: 'Task',
      updateTime: 'UpdateTime',
      workload: 'Workload',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'string',
      envParams: GetExperimentResponseBodyDataEnvParams,
      experimentId: 'number',
      experimentName: 'string',
      experimentType: 'string',
      getParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resource: GetExperimentResponseBodyDataResource,
      resourceName: 'string',
      results: GetExperimentResponseBodyDataResults,
      setParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      status: 'string',
      task: GetExperimentResponseBodyDataTask,
      updateTime: 'number',
      workload: GetExperimentResponseBodyDataWorkload,
      workloadName: 'string',
    };
  }

  validate() {
    if(this.envParams && typeof (this.envParams as any).validate === 'function') {
      (this.envParams as any).validate();
    }
    if(this.getParams) {
      $dara.Model.validateMap(this.getParams);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    if(this.setParams) {
      $dara.Model.validateMap(this.setParams);
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    if(this.workload && typeof (this.workload as any).validate === 'function') {
      (this.workload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

