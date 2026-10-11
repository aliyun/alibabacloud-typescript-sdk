// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyConfigurationAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * epc-hn302f6a9a284c4f****
   */
  egressProxyConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyConfigurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

