// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccfa5e34a5c1f4ce6b916a40a12151d88
   */
  clusterId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * kube_pod_container_status_ready
   */
  dropMetric?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dropMetric: 'DropMetric',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dropMetric: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

