// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-000**************134
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster description.
   * 
   * @example
   * description ack pv backup
   */
  description?: string;
  /**
   * @remarks
   * Cluster name.
   * 
   * @example
   * ack_pv_backup_location
   */
  name?: string;
  /**
   * @remarks
   * Network type, with possible values including:
   * * **CLASSIC**: Classic Network.
   * * **VPC**: Virtual Private Cloud.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Whether to regenerate the token.
   * 
   * @example
   * false
   */
  renewToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      name: 'Name',
      networkType: 'NetworkType',
      renewToken: 'RenewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      name: 'string',
      networkType: 'string',
      renewToken: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

