// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceEndpointRequest extends $dara.Model {
  /**
   * @example
   * cert-001
   */
  certIdentifier?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WORKER
   */
  component?: string;
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ins-001
   */
  instanceId?: string;
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

