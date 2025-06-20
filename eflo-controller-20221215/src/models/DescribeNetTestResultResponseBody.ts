// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetTestResultResponseBodyCommTest } from "./DescribeNetTestResultResponseBodyCommTest";
import { DescribeNetTestResultResponseBodyDelayTest } from "./DescribeNetTestResultResponseBodyDelayTest";
import { DescribeNetTestResultResponseBodyTrafficTest } from "./DescribeNetTestResultResponseBodyTrafficTest";


export class DescribeNetTestResultResponseBody extends $dara.Model {
  /**
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  commTest?: DescribeNetTestResultResponseBodyCommTest;
  /**
   * @example
   * 2024-10-15T10:25:42+08:00
   */
  creationTime?: string;
  delayTest?: DescribeNetTestResultResponseBodyDelayTest;
  /**
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @example
   * 23604
   */
  port?: string;
  /**
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  /**
   * @example
   * {}
   */
  resultDetial?: string;
  /**
   * @remarks
   * *
   * *
   * *
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @example
   * af35ce53-7c35-4277-834a-fbf49c316a96
   */
  testId?: string;
  trafficTest?: DescribeNetTestResultResponseBodyTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      creationTime: 'CreationTime',
      delayTest: 'DelayTest',
      finishedTime: 'FinishedTime',
      netTestType: 'NetTestType',
      port: 'Port',
      requestId: 'RequestId',
      resultDetial: 'ResultDetial',
      status: 'Status',
      testId: 'TestId',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: DescribeNetTestResultResponseBodyCommTest,
      creationTime: 'string',
      delayTest: DescribeNetTestResultResponseBodyDelayTest,
      finishedTime: 'string',
      netTestType: 'string',
      port: 'string',
      requestId: 'string',
      resultDetial: 'string',
      status: 'string',
      testId: 'string',
      trafficTest: DescribeNetTestResultResponseBodyTrafficTest,
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

