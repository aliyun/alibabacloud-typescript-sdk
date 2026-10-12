// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationNamespacedServicesResponseBodyDataNamespacedServicesServices extends $dara.Model {
  /**
   * @remarks
   * The service name. After you select a Server Load Balancer (SLB) instance, the frontend populates this value into the serviceName field.
   * 
   * @example
   * nginx-ingress-lb
   */
  name?: string;
  /**
   * @remarks
   * The ID of the load balancing instance associated with the service.
   * 
   * @example
   * lb-xxxx / nlb-xxxx
   */
  slbId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      slbId: 'slbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      slbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationNamespacedServicesResponseBodyDataNamespacedServices extends $dara.Model {
  /**
   * @remarks
   * The Kubernetes namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The list of migratable services in the namespace.
   */
  services?: GetMigrationNamespacedServicesResponseBodyDataNamespacedServicesServices[];
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      services: { 'type': 'array', 'itemType': GetMigrationNamespacedServicesResponseBodyDataNamespacedServicesServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationNamespacedServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of services grouped by namespace.
   */
  namespacedServices?: GetMigrationNamespacedServicesResponseBodyDataNamespacedServices[];
  static names(): { [key: string]: string } {
    return {
      namespacedServices: 'namespacedServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespacedServices: { 'type': 'array', 'itemType': GetMigrationNamespacedServicesResponseBodyDataNamespacedServices },
    };
  }

  validate() {
    if(Array.isArray(this.namespacedServices)) {
      $dara.Model.validateArray(this.namespacedServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationNamespacedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetMigrationNamespacedServicesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D513911-206E-5E93-9C9E-71D63C0D68E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMigrationNamespacedServicesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

