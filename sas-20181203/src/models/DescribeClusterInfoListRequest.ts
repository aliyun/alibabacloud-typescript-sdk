// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The operation value. The value specifies the ID of the cluster.
   * 
   * @example
   * c23551de6149343e8a54e69fbefe6****
   */
  target?: string;
  /**
   * @remarks
   * The dimension based on which you want to configure the feature. Valid values:
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
   * *   **containerNetwork**: container network
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
      target: 'Target',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
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

