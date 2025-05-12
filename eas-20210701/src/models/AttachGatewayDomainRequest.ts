// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachGatewayDomainRequestCustomDomain } from "./AttachGatewayDomainRequestCustomDomain";


export class AttachGatewayDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomain?: AttachGatewayDomainRequestCustomDomain;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: AttachGatewayDomainRequestCustomDomain,
    };
  }

  validate() {
    if(this.customDomain && typeof (this.customDomain as any).validate === 'function') {
      (this.customDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

