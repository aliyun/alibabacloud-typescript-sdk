// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgsShrinkRequest extends $dara.Model {
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
   * The maximum number of entries to return. Valid values: 1 to 100.<br>
   * Default value: 100.<br>
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. To retrieve the next page of results, set this parameter to the `NextToken` value that was returned from a previous request.
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
   * 产品部
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
  showExtrasShrink?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      includeOrgIds: 'IncludeOrgIds',
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

