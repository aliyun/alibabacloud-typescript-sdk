// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * - Maximum value: 50
   * 
   * - Default value: 50
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6mqIGdPhID94rjhZFGsvpJo
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-c5tv9d64ebjnj****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * @example
   * Test 1201
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. To query the regions supported by Elastic Desktop Service, call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

