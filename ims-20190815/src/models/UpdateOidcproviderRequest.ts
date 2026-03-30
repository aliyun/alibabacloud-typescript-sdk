// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client. If you want to specify multiple client IDs, separate the client IDs with commas (,).
   * 
   * A client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.``
   * 
   * A client ID can be up to 128 characters in length.
   * 
   * >  If you specify this parameter, all the client IDs of the OIDC IdP are replaced. If you need to only add or remove a client ID, call the AddClientIdToOIDCProvider or RemoveClientIdFromOIDCProvider operation. For more information, see [AddClientIdToOIDCProvider](https://help.aliyun.com/document_detail/332057.html) or [RemoveClientIdFromOIDCProvider](https://help.aliyun.com/document_detail/332058.html).
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 6
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * The description can be up to 256 characters in length.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  newDescription?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      issuanceLimitTime: 'IssuanceLimitTime',
      newDescription: 'NewDescription',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      issuanceLimitTime: 'number',
      newDescription: 'string',
      OIDCProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

