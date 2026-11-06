// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderSCIMRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable SCIM synchronization. Do not set this parameter to true during CustomSSO initialization. You can update this parameter only by calling UpdateIdentityProviderSCIM. Check the operationStatus field to determine the result.
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
   * The business parameters submitted in the request body. The body parameters of public APIs are mapped to backend wrappers by the gateway and must not be mixed with direct backend body wrappers.
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

