// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteResourceTokenAuthRequestUserIdentifier extends $dara.Model {
  /**
   * @example
   * externalUser
   */
  userId?: string;
  /**
   * @example
   * eyAgImFsZyI6ICJSU****
   */
  userJWT?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userJWT: 'UserJWT',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userJWT: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteResourceTokenAuthRequest extends $dara.Model {
  /**
   * @example
   * urn:ietf:params:oauth:request_uri:3030cabc-****-****-****-d0054944102a
   */
  sessionURI?: string;
  userIdentifier?: CompleteResourceTokenAuthRequestUserIdentifier;
  static names(): { [key: string]: string } {
    return {
      sessionURI: 'SessionURI',
      userIdentifier: 'UserIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionURI: 'string',
      userIdentifier: CompleteResourceTokenAuthRequestUserIdentifier,
    };
  }

  validate() {
    if(this.userIdentifier && typeof (this.userIdentifier as any).validate === 'function') {
      (this.userIdentifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

