// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResultsCommTest } from "./ListNetTestResultsResponseBodyNetTestResultsCommTest";
import { ListNetTestResultsResponseBodyNetTestResultsDelayTest } from "./ListNetTestResultsResponseBodyNetTestResultsDelayTest";
import { ListNetTestResultsResponseBodyNetTestResultsTrafficTest } from "./ListNetTestResultsResponseBodyNetTestResultsTrafficTest";


export class ListNetTestResultsResponseBodyNetTestResults extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i110667211718265012218
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * Returned when NetTestType is CommTest.
   */
  commTest?: ListNetTestResultsResponseBodyNetTestResultsCommTest;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-19T02:18:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Returned when NetTestType is DelayTest.
   */
  delayTest?: ListNetTestResultsResponseBodyNetTestResultsDelayTest;
  /**
   * @remarks
   * The finish time.
   * 
   * @example
   * 2024-10-30T02:07Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The type of the network test.
   * 
   * @example
   * NetDiag
   */
  netTestType?: string;
  /**
   * @remarks
   * The network mode.
   * 
   * @example
   * 01
   */
  networkMode?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The status of the network test task. Valid values:\\
   * ● InProgress\\
   * ● Finished\\
   * ● Failed
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The test ID. The unique identifier of the resource test task.
   * 
   * @example
   * String	i-uf6i0tv2refv8wz*****
   */
  testId?: string;
  /**
   * @remarks
   * Returned when NetTestType is TrafficTest.
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

