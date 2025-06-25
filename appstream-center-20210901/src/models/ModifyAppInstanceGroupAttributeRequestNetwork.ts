// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppInstanceGroupAttributeRequestNetworkDomainRules } from "./ModifyAppInstanceGroupAttributeRequestNetworkDomainRules";


export class ModifyAppInstanceGroupAttributeRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The domain name rules.
   */
  domainRules?: ModifyAppInstanceGroupAttributeRequestNetworkDomainRules[];
  static names(): { [key: string]: string } {
    return {
      domainRules: 'DomainRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRules: { 'type': 'array', 'itemType': ModifyAppInstanceGroupAttributeRequestNetworkDomainRules },
    };
  }

  validate() {
    if(Array.isArray(this.domainRules)) {
      $dara.Model.validateArray(this.domainRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

