// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyIpPoolAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyIpPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

