// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportedServicesDetailRequest extends $dara.Model {
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
   * cb8963379255149cb98c8686f274x****
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

