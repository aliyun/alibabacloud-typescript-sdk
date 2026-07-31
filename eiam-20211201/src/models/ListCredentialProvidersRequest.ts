// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialProvidersRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition name. Valid values:
   * 
   * @example
   * CredentialProviderName
   */
  name?: string;
  /**
   * @remarks
   * The list of filter condition values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of credential provider IDs.
   */
  credentialProviderIds?: string[];
  /**
   * @remarks
   * The list of credential provider types.
   */
  credentialProviderTypes?: string[];
  /**
   * @remarks
   * The list of filter conditions.
   */
  filter?: ListCredentialProvidersRequestFilter[];
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
   * The maximum number of entries per page for a paged query.
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
   * The list of credential provider statuses.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      credentialProviderIds: 'CredentialProviderIds',
      credentialProviderTypes: 'CredentialProviderTypes',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviderIds: { 'type': 'array', 'itemType': 'string' },
      credentialProviderTypes: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': ListCredentialProvidersRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.credentialProviderIds)) {
      $dara.Model.validateArray(this.credentialProviderIds);
    }
    if(Array.isArray(this.credentialProviderTypes)) {
      $dara.Model.validateArray(this.credentialProviderTypes);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

