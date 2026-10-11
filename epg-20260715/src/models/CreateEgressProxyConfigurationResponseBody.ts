// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy configuration.
   * 
   * @example
   * epc-uf609a6a8fdf9f4d****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C79118A9-CA6D-5359-B53E-111BE8A03DCF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyConfigurationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

