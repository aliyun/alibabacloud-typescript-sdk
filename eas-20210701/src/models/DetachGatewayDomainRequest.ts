// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachGatewayDomainRequestCustomDomain extends $dara.Model {
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type.
   * 
   * Valid value:
   * 
   * *   intranet: internal network.
   * *   internet: public network.
   * 
   * This parameter is required.
   * 
   * @example
   * intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachGatewayDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomain?: DetachGatewayDomainRequestCustomDomain;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: DetachGatewayDomainRequestCustomDomain,
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

