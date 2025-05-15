// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateServicePolicyResponseBodyMissingPolicy } from "./GenerateServicePolicyResponseBodyMissingPolicy";


export class GenerateServicePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies that are missing.
   */
  missingPolicy?: GenerateServicePolicyResponseBodyMissingPolicy[];
  /**
   * @remarks
   * The RAM policy.
   * 
   * @example
   * {Statement": [{ "Action": ["oos:*"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:DescribeInstances"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:RunInstance"], "Effect": "Allow", "Resource": "*"}], "Version": "1"}
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5040BE9E-8DA2-5C9D-9B70-0EE6027A14BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': GenerateServicePolicyResponseBodyMissingPolicy },
      policy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

