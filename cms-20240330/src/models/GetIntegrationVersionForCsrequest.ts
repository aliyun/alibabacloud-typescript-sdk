// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntegrationVersionForCSRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * c502646fd0d1249baaf792b3a1b589e1b
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values: acs.ack.cluster and acs.asi.cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * acs.ack.cluster
   */
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterType: 'clusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

