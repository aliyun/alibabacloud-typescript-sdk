// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackendServices extends $dara.Model {
  /**
   * @example
   * item-service
   */
  name?: string;
  /**
   * @example
   * port
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * service-cq2bmmdlhtgj***
   */
  serviceId?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

