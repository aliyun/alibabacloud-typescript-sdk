// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteResourceTokenAuthShrinkRequest extends $dara.Model {
  sessionURI?: string;
  userIdentifierShrink?: string;
  static names(): { [key: string]: string } {
    return {
      sessionURI: 'SessionURI',
      userIdentifierShrink: 'UserIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionURI: 'string',
      userIdentifierShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

