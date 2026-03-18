// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAuthenticationTokenByConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      credentialProviderIdentifier: 'credentialProviderIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      credentialProviderIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

