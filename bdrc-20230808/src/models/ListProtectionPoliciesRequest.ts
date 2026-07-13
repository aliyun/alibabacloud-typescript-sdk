// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectionPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * The protection policy ID.
   * 
   * @example
   * p-123***7890
   */
  protectionPolicyId?: string;
  /**
   * @remarks
   * The region ID of the protection policy.
   * 
   * @example
   * cn-hangzhou
   */
  protectionPolicyRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      protectionPolicyId: 'ProtectionPolicyId',
      protectionPolicyRegionId: 'ProtectionPolicyRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      protectionPolicyId: 'string',
      protectionPolicyRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

