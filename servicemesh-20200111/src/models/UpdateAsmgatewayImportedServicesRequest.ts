// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateASMGatewayImportedServicesRequest extends $dara.Model {
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
   * The names of the services. Separate multiple service names with commas (,). Example: reviews,sleep.
   * 
   * @example
   * reviews,sleep
   */
  serviceNames?: string;
  /**
   * @remarks
   * The namespace in which the service resides.
   * 
   * @example
   * default
   */
  serviceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayName: 'ASMGatewayName',
      serviceMeshId: 'ServiceMeshId',
      serviceNames: 'ServiceNames',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      serviceMeshId: 'string',
      serviceNames: 'string',
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

