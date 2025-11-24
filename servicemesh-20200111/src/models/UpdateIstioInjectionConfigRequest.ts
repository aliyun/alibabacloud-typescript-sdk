// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIstioInjectionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The data plane mode of the namespace. This parameter is valid only when the Ambient Mesh mode is enabled for the current Service Mesh (ASM) instance. Valid values:
   * 
   * *   ambient: sets the data plane mode of the namespace to the Ambient Mesh mode.
   * *   sidecar: sets the data plane mode of the namespace to the Sidecar mode.
   * 
   * @example
   * ambient
   */
  dataPlaneMode?: string;
  /**
   * @remarks
   * Specifies whether to enable Istio automatic sidecar injection.
   * 
   * @example
   * true
   */
  enableIstioInjection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sidecar injection by using SidecarSet.
   * 
   * @example
   * false
   */
  enableSidecarSetInjection?: boolean;
  /**
   * @remarks
   * Specifies the version to be injected into the namespace. This parameter is valid only when the ASM instance performs a canary release. When IstioRev is not empty, you must not specify EnableIstioInjection and EnableSidecarSetInjection.
   * 
   * @example
   * canary
   */
  istioRev?: string;
  /**
   * @remarks
   * The namespace for which you want to modify the sidecar injection setting.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ce2cdbb9d013f447180cf5ca8bb******
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPlaneMode: 'DataPlaneMode',
      enableIstioInjection: 'EnableIstioInjection',
      enableSidecarSetInjection: 'EnableSidecarSetInjection',
      istioRev: 'IstioRev',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPlaneMode: 'string',
      enableIstioInjection: 'boolean',
      enableSidecarSetInjection: 'boolean',
      istioRev: 'string',
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

