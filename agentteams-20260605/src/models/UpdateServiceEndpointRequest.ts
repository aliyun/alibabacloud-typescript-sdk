// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceEndpointRequest extends $dara.Model {
  /**
   * @example
   * 22584627-cn-hangzhou
   */
  certIdentifier?: string;
  clientToken?: string;
  /**
   * @example
   * api.example.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mep-abc123
   */
  endpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      clientToken: 'ClientToken',
      domain: 'Domain',
      endpointId: 'EndpointId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      clientToken: 'string',
      domain: 'string',
      endpointId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

