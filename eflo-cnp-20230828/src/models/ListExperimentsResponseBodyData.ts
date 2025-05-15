// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentsResponseBodyDataEnvParams } from "./ListExperimentsResponseBodyDataEnvParams";
import { ListExperimentsResponseBodyDataResults } from "./ListExperimentsResponseBodyDataResults";


export class ListExperimentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-10-22 10:18:10
   */
  createTime?: number;
  /**
   * @remarks
   * Task end time
   * 
   * @example
   * 2024-10-22 10:28:10
   */
  endTime?: string;
  /**
   * @remarks
   * Environment parameters in operation
   */
  envParams?: ListExperimentsResponseBodyDataEnvParams;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 1684537476910997506
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
   * Parsed load parameters
   */
  getParams?: { [key: string]: string };
  /**
   * @remarks
   * Resource name
   * 
   * @example
   * ecs.r8y.4xlarge
   */
  resourceName?: string;
  /**
   * @remarks
   * Task results
   */
  results?: ListExperimentsResponseBodyDataResults;
  /**
   * @remarks
   * Load parameters in operation
   */
  setParams?: { [key: string]: string };
  /**
   * @remarks
   * Task start time
   * 
   * @example
   * 2024-10-22 10:18:10
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
   * Update time
   * 
   * @example
   * 2024-10-22 10:18:10
   */
  updateTime?: number;
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
      resourceName: 'ResourceName',
      results: 'Results',
      setParams: 'SetParams',
      startTime: 'StartTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'string',
      envParams: ListExperimentsResponseBodyDataEnvParams,
      experimentId: 'number',
      experimentName: 'string',
      experimentType: 'string',
      getParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceName: 'string',
      results: ListExperimentsResponseBodyDataResults,
      setParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      status: 'string',
      updateTime: 'number',
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
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    if(this.setParams) {
      $dara.Model.validateMap(this.setParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

