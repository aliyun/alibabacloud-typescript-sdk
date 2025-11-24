// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaypointsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * This parameter is required.
   * 
   * @example
   * ce3c25e247da24f3aab9b7edfae83****
   */
  clusterId?: string;
  /**
   * @remarks
   * Used in conjunction with Limit, it is used to query waypoints starting from a specified offset. When calling for the first time, no need to care abount it. If the Continue in the returned result is not empty, it means that there is still data that has not been returned, and you need to continue the call with the returned Continue.
   * 
   * @example
   * eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6MjY4Njc5Miwic3RhcnQiOiJkZWZhdWx0L2Jvb2tpbmZvLXByb2R1Y3RwYWdlXHUwMDAwIn0
   */
  continue?: string;
  /**
   * @remarks
   * Limit the number of waypoints returned.
   * 
   * @example
   * 30
   */
  limit?: number;
  /**
   * @remarks
   * Waypoint which you want to get. If empty, return all waypoints.
   * 
   * @example
   * bookinfo-productpage
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The Service Mesh (ASM) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      continue: 'Continue',
      limit: 'Limit',
      name: 'Name',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      continue: 'string',
      limit: 'number',
      name: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

