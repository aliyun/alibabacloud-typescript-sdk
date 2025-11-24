// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveClusterFromServiceMeshRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to reserve the istio-system namespace when you delete the cluster. Valid values: true and false.
   * 
   * @example
   * false
   */
  reserveNamespace?: boolean;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ce3c25e247da24f3aab9b7edfae83****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      reserveNamespace: 'ReserveNamespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      reserveNamespace: 'boolean',
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

