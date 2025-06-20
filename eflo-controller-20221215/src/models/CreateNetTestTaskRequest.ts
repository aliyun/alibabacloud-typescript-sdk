// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetTestTaskRequestCommTest } from "./CreateNetTestTaskRequestCommTest";
import { CreateNetTestTaskRequestDelayTest } from "./CreateNetTestTaskRequestDelayTest";
import { CreateNetTestTaskRequestTrafficTest } from "./CreateNetTestTaskRequestTrafficTest";


export class CreateNetTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Specify when NetTestType is CommTest.
   */
  commTest?: CreateNetTestTaskRequestCommTest;
  /**
   * @remarks
   * Specify when NetTestType is DelayTest.
   */
  delayTest?: CreateNetTestTaskRequestDelayTest;
  /**
   * @remarks
   * The type of the network test. Valid values: DelayTest, TrafficTest, and CommTest.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * The network mode.
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * If the TrafficModel is Fullmesh, leave this parameter empty.
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

