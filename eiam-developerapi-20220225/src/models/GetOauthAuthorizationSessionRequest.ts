// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOAuthAuthorizationSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization session URI.
   * 
   * > Returned by the FetchOAuthAuthenticationToken call.
   * 
   * This parameter is required.
   * 
   * @example
   * urn:ietf:params:oauth:request_uri:atpoas_01l6ljnvrpc5niakl3gj3amxxxxxx
   */
  sessionUri?: string;
  static names(): { [key: string]: string } {
    return {
      sessionUri: 'sessionUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

