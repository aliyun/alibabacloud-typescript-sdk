// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyTableAssociationsResponseBodyAssociations extends $dara.Model {
  /**
   * @remarks
   * The ID of the association between the policy route table and the network instance connection.
   * 
   * @example
   * pta-vfan3mbxoespx7xvyt
   */
  associationId?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-123qsrads
   */
  attachmentId?: string;
  /**
   * @remarks
   * The policy routing table instance ID.
   * 
   * @example
   * ptbl-123adfzcx
   */
  policyTableId?: string;
  /**
   * @remarks
   * The status of the association. Valid values:
   * 
   * - **Active**: active.
   * - **Associating**: associating.
   * - **Dissociating**: dissociating.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      attachmentId: 'AttachmentId',
      policyTableId: 'PolicyTableId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      attachmentId: 'string',
      policyTableId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterPolicyTableAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The associate relationships between the policy routing table and network connectivity instances.
   */
  associations?: DescribeTransitRouterPolicyTableAssociationsResponseBodyAssociations[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13526224-5780-4426-8BDF-BC8B08700F22
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      associations: 'Associations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associations: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTableAssociationsResponseBodyAssociations },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.associations)) {
      $dara.Model.validateArray(this.associations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

