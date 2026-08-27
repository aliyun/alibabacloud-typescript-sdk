// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * cert-001
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The idempotency token that ensures the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The component type. Valid values: `ELEMENT`, `TUNNEL`, `MATRIX`, and `WORKER`.
   * 
   * This parameter is required.
   * 
   * @example
   * WORKER
   */
  component?: string;
  /**
   * @remarks
   * The custom domain name. The server trims and converts the value to lowercase.
   * 
   * @example
   * matrix.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ins-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * my-service
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      clientToken: 'ClientToken',
      component: 'Component',
      domain: 'Domain',
      instanceId: 'InstanceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      clientToken: 'string',
      component: 'string',
      domain: 'string',
      instanceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

