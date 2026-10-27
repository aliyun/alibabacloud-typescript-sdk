// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The list of organization IDs to query.
   */
  includeOrgIds?: string[];
  /**
   * @remarks
   * Specifies whether to query all subordinate organizations when a parent organization is specified.
   */
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set the value to the NextToken parameter returned by the previous API call.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Product Department
   */
  orgName?: string;
  /**
   * @remarks
   * The ID of the parent organization.
   * 
   * @example
   * org-11fs****
   */
  parentOrgId?: string;
  /**
   * @remarks
   * The switch mapping for additional response information. This parameter controls whether to return organization paths and resource policy information.
   */
  showExtrasShrink?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      includeOrgIds: 'IncludeOrgIds',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
      showExtrasShrink: 'ShowExtras',
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
      showExtrasShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.includeOrgIds)) {
      $dara.Model.validateArray(this.includeOrgIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

