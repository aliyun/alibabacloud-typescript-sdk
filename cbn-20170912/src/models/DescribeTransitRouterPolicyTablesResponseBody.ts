// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyTablesResponseBodyPolicyTablesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagtest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterPolicyTablesResponseBodyPolicyTables extends $dara.Model {
  /**
   * @remarks
   * The attachments associated with the policy route table.
   */
  attachments?: string[];
  /**
   * @remarks
   * The time when the policy route table was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2019-10-22T07:44Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the policy route table.
   * 
   * @example
   * descriptiontest
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy route table.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the policy route table instance.
   * 
   * @example
   * ptbl-44m0p68spvlrqq****
   */
  policyTableId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the policy route table. Valid values:
   * 
   * - Creating: The policy route table is being created.
   * 
   * - Active: The policy route table is running.
   * 
   * - Deleting: The policy route table is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the policy route table.
   */
  tags?: DescribeTransitRouterPolicyTablesResponseBodyPolicyTablesTags[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      creationTime: 'CreationTime',
      description: 'Description',
      name: 'Name',
      policyTableId: 'PolicyTableId',
      regionId: 'RegionId',
      status: 'Status',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'string',
      description: 'string',
      name: 'string',
      policyTableId: 'string',
      regionId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTablesResponseBodyPolicyTablesTags },
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterPolicyTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * If NextToken is empty, no next query is to be sent.
   * If NextToken is returned, the value indicates the token that is used to start the next query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy route tables.
   */
  policyTables?: DescribeTransitRouterPolicyTablesResponseBodyPolicyTables[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BFA6822-240E-4E27-B4C8-AA400EF7474D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyTables: 'PolicyTables',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyTables: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTablesResponseBodyPolicyTables },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyTables)) {
      $dara.Model.validateArray(this.policyTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

