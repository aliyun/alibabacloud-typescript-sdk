// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderSCIMRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable synchronization. Do not set this parameter to true during CustomSSO initialization. You can only update this parameter by calling UpdateIdentityProviderSCIM later. Determine the result based on the operationStatus field.
   * 
   * This parameter is required.
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      syncEnabled: 'syncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderSCIMRequest extends $dara.Model {
  /**
   * @remarks
   * Submits the business parameters as described in this API. The body parameters of the public API are mapped to the backend wrapper by the gateway. Do not mix them with the backend direct connection body wrapper.
   * 
   * This parameter is required.
   */
  body?: UpdateIdentityProviderSCIMRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateIdentityProviderSCIMRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

