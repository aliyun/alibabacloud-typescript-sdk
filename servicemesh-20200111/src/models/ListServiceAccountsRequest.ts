// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceAccountsRequest extends $dara.Model {
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
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ce134b0727aa2492db69f6c3880e1****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

