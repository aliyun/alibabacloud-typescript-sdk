// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentifyCredentialShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The user credential object.
   */
  identifyCredentialShrink?: string;
  static names(): { [key: string]: string } {
    return {
      identifyCredentialShrink: 'IdentifyCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyCredentialShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

