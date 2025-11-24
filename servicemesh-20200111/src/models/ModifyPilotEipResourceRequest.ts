// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPilotEipResourceRequest extends $dara.Model {
  /**
   * @example
   * eip-hp36jpqq5eged********
   */
  eipId?: string;
  /**
   * @remarks
   * The type of the Istio Pilot with which you want to associate the EIPs. Valid values:
   * 
   * *   `true`: Bind an EIP to the Istio Pilot during canary release (only valid during the canary release).
   * *   `false`: Bind an EIP to the Istio Pilot in stable state.
   * 
   * @example
   * false
   */
  isCanary?: boolean;
  /**
   * @remarks
   * The type of the operation that you want to perform. Valid values:
   * 
   * *   `UnBindEip`: unbinds an elastic IP address (EIP) from the Istio Pilot.
   * *   `BindEip`: binds an EIP to the Istio Pilot.
   * 
   * @example
   * BindEip
   */
  operation?: string;
  /**
   * @example
   * c1f5a67154bec40629c2698ec********
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      eipId: 'EipId',
      isCanary: 'IsCanary',
      operation: 'Operation',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipId: 'string',
      isCanary: 'boolean',
      operation: 'string',
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

