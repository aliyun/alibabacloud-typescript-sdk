// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnitsResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * The scope ID.
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * The scope name.
   * 
   * @example
   * Read User Info
   */
  resourceServerScopeName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_qsw77zl5vrllwzyrrfwbmpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organizational unit ID.
   * 
   * @example
   * ou_nbsomva32b6utec3hgi7scxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * A list of scopes.
   */
  resourceServerScopes?: ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnitsResourceServerScopes[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      resourceServerScopes: 'ResourceServerScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnitsResourceServerScopes },
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopes)) {
      $dara.Model.validateArray(this.resourceServerScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForResourceServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A token to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of organizational units.
   */
  organizationalUnits?: ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

