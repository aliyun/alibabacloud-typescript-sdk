// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The field to filter on. Valid value:
   * 
   * - `CredentialIdentifier`: the credential identifier.
   * 
   * @example
   * CredentialIdentifier
   */
  name?: string;
  /**
   * @remarks
   * The values for the specified filter field.
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

export class ListCredentialsRequest extends $dara.Model {
  credentialExternalIds?: string[];
  /**
   * @remarks
   * The credential IDs.
   */
  credentialIds?: string[];
  credentialSharingScopes?: string[];
  credentialTypes?: string[];
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListCredentialsRequestFilter[];
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
   * The number of entries per page.
   * 
   * - Default value: 20.
   * 
   * - Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The credential statuses.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      credentialExternalIds: 'CredentialExternalIds',
      credentialIds: 'CredentialIds',
      credentialSharingScopes: 'CredentialSharingScopes',
      credentialTypes: 'CredentialTypes',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialExternalIds: { 'type': 'array', 'itemType': 'string' },
      credentialIds: { 'type': 'array', 'itemType': 'string' },
      credentialSharingScopes: { 'type': 'array', 'itemType': 'string' },
      credentialTypes: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': ListCredentialsRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.credentialExternalIds)) {
      $dara.Model.validateArray(this.credentialExternalIds);
    }
    if(Array.isArray(this.credentialIds)) {
      $dara.Model.validateArray(this.credentialIds);
    }
    if(Array.isArray(this.credentialSharingScopes)) {
      $dara.Model.validateArray(this.credentialSharingScopes);
    }
    if(Array.isArray(this.credentialTypes)) {
      $dara.Model.validateArray(this.credentialTypes);
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

