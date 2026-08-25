// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the external identity provider.
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

