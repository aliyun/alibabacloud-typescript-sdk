// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration fields to be modified. For DingTalk and Feishu, you must submit at least one of the following fields: loginEnabled, syncEnabled, metadata, and syncScope. For CustomSSO, use the protocol, saml, and loginEnabled fields. You cannot submit the vendor metadata, syncEnabled, or syncScope fields.
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

