// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationFederatedCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application federated credential provider.
   * 
   * @example
   * oidc
   */
  applicationFederatedCredentialType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_xxxasda1
   */
  applicationId?: string;
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
   * The number of entries per page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the previous page of results.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialType: 'ApplicationFederatedCredentialType',
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialType: 'string',
      applicationId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

