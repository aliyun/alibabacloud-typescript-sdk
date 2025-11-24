// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace. This parameter is valid only after you set the Namespace and the ServiceAccount parameters.
   * 
   * @example
   * hello
   */
  namespace?: string;
  /**
   * @remarks
   * The service account. This parameter is valid only after you set the Namespace and the ServiceAccount parameters.
   * 
   * @example
   * http-sa
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ce51a7de4a5144db88a864ed91****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The trusted domain. Default value: cluster.local. This parameter is valid only after you set the Namespace and the ServiceAccount parameters.
   * 
   * @example
   * cluster.local
   */
  trustDomain?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      serviceAccount: 'ServiceAccount',
      serviceMeshId: 'ServiceMeshId',
      trustDomain: 'TrustDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      serviceAccount: 'string',
      serviceMeshId: 'string',
      trustDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

