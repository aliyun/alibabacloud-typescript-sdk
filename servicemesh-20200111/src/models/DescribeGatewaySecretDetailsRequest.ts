// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewaySecretDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  istioGatewayName?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
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

