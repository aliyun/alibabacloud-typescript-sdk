// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to query.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * c870ec78ecbcb41d2a35c679823ef****
   */
  clusterId?: string;
  /**
   * @remarks
   * The dimension from which you want to configure the feature. Valid values:
   * 
   * *   **Cluster**: the ID of the cluster
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   **containerNetwork**: container network topology
   * *   **interceptionSwitch**: cluster microsegmentation
   * 
   * This parameter is required.
   * 
   * @example
   * containerNetwork
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

