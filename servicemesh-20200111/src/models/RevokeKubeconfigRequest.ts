// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeKubeconfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the kubeconfig file for private access.
   * 
   * *   `true`: returns the kubeconfig file for private access.
   * *   `false`: returns the kubeconfig file for public access.
   * 
   * @example
   * false
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The ID of the ASM instance for which you want to revoke its kubeconfig file.
   * 
   * This parameter is required.
   * 
   * @example
   * cf08a11940e8c46c48bc791fcdb3****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
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

