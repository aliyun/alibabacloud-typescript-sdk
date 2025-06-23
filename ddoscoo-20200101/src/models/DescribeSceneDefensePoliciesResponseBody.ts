// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSceneDefensePoliciesResponseBodyPolicies } from "./DescribeSceneDefensePoliciesResponseBodyPolicies";


export class DescribeSceneDefensePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the scenario-specific custom policy.
   */
  policies?: DescribeSceneDefensePoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F65DF043-E0EB-4796-9467-23DDCDF92C1D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

