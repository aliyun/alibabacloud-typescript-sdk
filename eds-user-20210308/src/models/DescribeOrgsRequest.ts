// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 100.\\
   * Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the DescribeOrgs operation was called.
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
   * org****
   */
  orgName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

