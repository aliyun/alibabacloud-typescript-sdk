// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResultsCommTest } from "./ListNetTestResultsResponseBodyNetTestResultsCommTest";
import { ListNetTestResultsResponseBodyNetTestResultsDelayTest } from "./ListNetTestResultsResponseBodyNetTestResultsDelayTest";
import { ListNetTestResultsResponseBodyNetTestResultsTrafficTest } from "./ListNetTestResultsResponseBodyNetTestResultsTrafficTest";


export class ListNetTestResultsResponseBodyNetTestResults extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i110667211718265012218
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * To be filled when the network test type is communication library test
   */
  commTest?: ListNetTestResultsResponseBodyNetTestResultsCommTest;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-01-19T02:18:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Fill in when the network test type is latency test
   */
  delayTest?: ListNetTestResultsResponseBodyNetTestResultsDelayTest;
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-10-30T02:07Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * Type of network test.
   * 
   * @example
   * NetDiag
   */
  netTestType?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 01
   */
  networkMode?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * Status of the network test task. Possible values:</br>
   * - InProgress: Testing in progress.</br>
   * - Finished: Test completed.</br>
   * - Failed: Test failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * Test ID. A unique identifier for the resource test task.
   * 
   * @example
   * String	i-uf6i0tv2refv8wz*****
   */
  testId?: string;
  /**
   * @remarks
   * Fill in when the network test type is traffic test.
   */
  trafficTest?: ListNetTestResultsResponseBodyNetTestResultsTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      creationTime: 'CreationTime',
      delayTest: 'DelayTest',
      finishedTime: 'FinishedTime',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      status: 'Status',
      testId: 'TestId',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: ListNetTestResultsResponseBodyNetTestResultsCommTest,
      creationTime: 'string',
      delayTest: ListNetTestResultsResponseBodyNetTestResultsDelayTest,
      finishedTime: 'string',
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      status: 'string',
      testId: 'string',
      trafficTest: ListNetTestResultsResponseBodyNetTestResultsTrafficTest,
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

