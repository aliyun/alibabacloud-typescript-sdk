// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthnSourceMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * The source identity provider (IdP) ID.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of rows per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The token used to query the previous page.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The external association ID.
   * 
   * @example
   * user_123131xxasasa
   */
  userExternalId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_ue2jvisn35exxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      userExternalId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

