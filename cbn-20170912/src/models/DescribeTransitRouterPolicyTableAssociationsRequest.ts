// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyTableAssociationsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **PolicyTableId**: the policy routing table ID.
   * - **AttachmentId**: the network connectivity instance ID.
   * - **AssociationId**: the policy routing table associate relationship instance ID.
   * 
   * By default, multiple filter conditions are connected by the **AND** logical operator. A result is returned only when all filter conditions are met.
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
   * Specify the filter value based on the **Key** parameter. You can specify multiple filter values for a single **Key**. Multiple filter values are connected by the **OR** logical operator. A result is returned when any of the filter values is met.
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
   * The filter conditions. You can specify up to five filter conditions at a time.
   */
  filter?: DescribeTransitRouterPolicyTableAssociationsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no subsequent query is available.
   * - If a value is returned for **NextToken**, the value is the token for the next query.
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

