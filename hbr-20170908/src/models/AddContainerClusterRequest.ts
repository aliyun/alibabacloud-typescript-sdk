// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContainerClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the cluster. Only Container Service for Kubernetes (ACK) clusters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * description ack pv backup
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cluster that you want to register.
   * 
   * This parameter is required.
   * 
   * @example
   * cca8f35f0e0d84540b49d994511c2c87a
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ack_pv_backup_location
   */
  name?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **CLASSIC**: the classic network
   * *   **VPC**: a virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      description: 'Description',
      identifier: 'Identifier',
      name: 'Name',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      description: 'string',
      identifier: 'string',
      name: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

