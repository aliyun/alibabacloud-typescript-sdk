// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeRequestNetworkDomainRules extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The policy used for the domain name.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
   * 
   * @example
   * block
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

