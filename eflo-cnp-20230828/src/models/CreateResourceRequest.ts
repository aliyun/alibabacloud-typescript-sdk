// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateResourceRequestMachineTypes } from "./CreateResourceRequestMachineTypes";
import { CreateResourceRequestUserAccessParam } from "./CreateResourceRequestUserAccessParam";


export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster Description
   * 
   * @example
   * ppu集群
   */
  clusterDesc?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-sh-fj71c0ycfw
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * This parameter is required.
   * 
   * @example
   * tre-1-ppu
   */
  clusterName?: string;
  /**
   * @remarks
   * Machine Types
   * 
   * This parameter is required.
   */
  machineTypes?: CreateResourceRequestMachineTypes;
  /**
   * @remarks
   * User Access Parameters
   * 
   * This parameter is required.
   */
  userAccessParam?: CreateResourceRequestUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      clusterDesc: 'ClusterDesc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      machineTypes: 'MachineTypes',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDesc: 'string',
      clusterId: 'string',
      clusterName: 'string',
      machineTypes: CreateResourceRequestMachineTypes,
      userAccessParam: CreateResourceRequestUserAccessParam,
    };
  }

  validate() {
    if(this.machineTypes && typeof (this.machineTypes as any).validate === 'function') {
      (this.machineTypes as any).validate();
    }
    if(this.userAccessParam && typeof (this.userAccessParam as any).validate === 'function') {
      (this.userAccessParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

