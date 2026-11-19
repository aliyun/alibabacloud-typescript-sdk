// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsForResourceServerRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition.
   * 
   * @example
   * OrganizationalUnitIds
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

export class ListOrganizationalUnitsForResourceServerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource server application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of filter conditions.
   */
  filter?: ListOrganizationalUnitsForResourceServerRequestFilter[];
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
   * The number of entries to return per page for paging in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token for the next page. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The scope ID.
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceServerScopeId: 'ResourceServerScopeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      filter: { 'type': 'array', 'itemType': ListOrganizationalUnitsForResourceServerRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceServerScopeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

