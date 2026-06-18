// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskShrinkRequest extends $dara.Model {
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
   * Specify this parameter if NetTestType is set to CommTest.
   */
  commTestShrink?: string;
  /**
   * @remarks
   * Specify this parameter if NetTestType is set to DelayTest.
   */
  delayTestShrink?: string;
  /**
   * @remarks
   * The type of network test. Valid values: DelayTest, TrafficTest, and CommTest.
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
   * The test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * This field is empty if TrafficModel is set to Fullmesh.
   */
  trafficTestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTestShrink: 'CommTest',
      delayTestShrink: 'DelayTest',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      trafficTestShrink: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTestShrink: 'string',
      delayTestShrink: 'string',
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      trafficTestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

