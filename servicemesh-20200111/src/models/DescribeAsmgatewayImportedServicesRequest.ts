// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeASMGatewayImportedServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  ASMGatewayName?: string;
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
  /**
   * @remarks
   * The namespace in which the services reside.
   * 
   * @example
   * default
   */
  serviceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayName: 'ASMGatewayName',
      serviceMeshId: 'ServiceMeshId',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      serviceMeshId: 'string',
      serviceNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

