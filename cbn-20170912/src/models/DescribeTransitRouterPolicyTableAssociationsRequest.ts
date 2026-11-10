// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyTableAssociationsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **PolicyTableId**: The instance ID of the policy routing table.
   * - **AttachmentId**: The instance ID of the network connectivity instance.
   * - **AssociationId**: The instance ID of the policy routing table associate relationship.
   * 
   * By default, multiple filter conditions are connected by the **AND** operator. A match is found only when all filter conditions are met.
   * 
   * You can specify up to five filter conditions at a time.
   * 
   * @example
   * CenId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify the filter value based on **Key**. You can specify multiple filter values for a single **Key**. Multiple filter values are connected by the **OR** operator. A match is found when any of the filter values is met.
   * 
   * You can specify up to five filter values for a single filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeTransitRouterPolicyTableAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about filter conditions. 
   * 
   * You can specify up to five filter conditions at a time.
   */
  filter?: DescribeTransitRouterPolicyTableAssociationsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return per page in a paginated query. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, it indicates that no next query is available.
   * - If **NextToken** returns a value, the value is the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTableAssociationsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
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

