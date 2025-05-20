// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetTestTaskRequestCommTest } from "./CreateNetTestTaskRequestCommTest";
import { CreateNetTestTaskRequestDelayTest } from "./CreateNetTestTaskRequestDelayTest";
import { CreateNetTestTaskRequestTrafficTest } from "./CreateNetTestTaskRequestTrafficTest";


export class CreateNetTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Required when the test type is communication library testing
   */
  commTest?: CreateNetTestTaskRequestCommTest;
  /**
   * @remarks
   * Fill in this field when the network test type is delay testing.
   */
  delayTest?: CreateNetTestTaskRequestDelayTest;
  /**
   * @remarks
   * Network test type.
   * For example: DelayTest for latency testing, TrafficTest for traffic testing, CommTest for communication library testing.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * This field is empty if the TrafficModel is Fullmesh.
   */
  trafficTest?: CreateNetTestTaskRequestTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      delayTest: 'DelayTest',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: CreateNetTestTaskRequestCommTest,
      delayTest: CreateNetTestTaskRequestDelayTest,
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      trafficTest: CreateNetTestTaskRequestTrafficTest,
    };
  }

  validate() {
    if(this.commTest && typeof (this.commTest as any).validate === 'function') {
      (this.commTest as any).validate();
    }
    if(this.delayTest && typeof (this.delayTest as any).validate === 'function') {
      (this.delayTest as any).validate();
    }
    if(this.trafficTest && typeof (this.trafficTest as any).validate === 'function') {
      (this.trafficTest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

