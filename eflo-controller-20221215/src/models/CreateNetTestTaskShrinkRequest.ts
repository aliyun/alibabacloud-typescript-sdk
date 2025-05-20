// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskShrinkRequest extends $dara.Model {
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
  commTestShrink?: string;
  /**
   * @remarks
   * Fill in this field when the network test type is delay testing.
   */
  delayTestShrink?: string;
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

