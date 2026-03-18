// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthenticationTokensRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
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
  /**
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * false
   */
  revoked?: boolean;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      credentialProviderIdentifier: 'credentialProviderIdentifier',
      expired: 'expired',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      revoked: 'revoked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      credentialProviderIdentifier: 'string',
      expired: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      revoked: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

