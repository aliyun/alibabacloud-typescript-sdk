// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublicNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The public network access switch configuration for the instance.
   * 
   * @example
   * {"enablePublic":true}
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

