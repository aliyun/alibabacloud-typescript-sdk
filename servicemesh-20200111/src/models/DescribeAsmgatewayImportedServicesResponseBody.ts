// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeASMGatewayImportedServicesResponseBodyImportedServices extends $dara.Model {
  /**
   * @remarks
   * The name of a service.
   * 
   * @example
   * productpage
   */
  serviceName?: string;
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
      serviceName: 'ServiceName',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
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

export class DescribeASMGatewayImportedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the imported services.
   */
  importedServices?: DescribeASMGatewayImportedServicesResponseBodyImportedServices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11fd0027-c27e-41bb-a565-75583054****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      importedServices: 'ImportedServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importedServices: { 'type': 'array', 'itemType': DescribeASMGatewayImportedServicesResponseBodyImportedServices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.importedServices)) {
      $dara.Model.validateArray(this.importedServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

