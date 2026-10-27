// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderSCIMShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Submits business parameters as described in this API. The body parameters of the public API are mapped to the backend wrapper by the gateway. Do not mix them with the backend direct connection body wrapper.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

