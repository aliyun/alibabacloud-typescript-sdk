// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthenticationTokensRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the authentication token consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * Credential provider identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * Indicates whether the authentication token is expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * Maximum number of records to return in this paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token that marks the start of the next page in a paged query.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates whether the authentication token is revoked.
   * 
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

