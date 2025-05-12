// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Maximum value: 100
   * *   Default value: 20
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

