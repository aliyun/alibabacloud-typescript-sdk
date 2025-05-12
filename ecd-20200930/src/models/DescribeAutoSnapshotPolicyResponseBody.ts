// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies } from "./DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies";


export class DescribeAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the queried automatic snapshot policies.
   */
  autoSnapshotPolicies?: DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies[];
  /**
   * @remarks
   * The token that is used to start the next query. If this parameter is empty, all results haven been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7F6612E-59CC-59F9-9DD1-91867FCC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicies: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotPolicies)) {
      $dara.Model.validateArray(this.autoSnapshotPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

