// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgsRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  includeOrgIds?: string[];
  /**
   * @remarks
   * Specifies whether to query all subordinate organizations when a parent organization is specified.
   */
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.    
   * Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken that was returned in the previous API call.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * ProductDepartment
   */
  orgName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-11fs****
   */
  parentOrgId?: string;
  showExtras?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      includeOrgIds: 'IncludeOrgIds',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
      showExtras: 'ShowExtras',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      includeOrgIds: { 'type': 'array', 'itemType': 'string' },
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orgName: 'string',
      parentOrgId: 'string',
      showExtras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.includeOrgIds)) {
      $dara.Model.validateArray(this.includeOrgIds);
    }
    if(this.showExtras) {
      $dara.Model.validateMap(this.showExtras);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

