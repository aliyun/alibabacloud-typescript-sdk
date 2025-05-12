// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachGatewayDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomainShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customDomainShrink: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomainShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

