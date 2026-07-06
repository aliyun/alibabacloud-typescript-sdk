// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentStoragePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent storage.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The access control policy of the agent storage in JSON format. For more information, see https://www.alibabacloud.com/help/en/ram/user-guide/policy-structure-and-syntax.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "Version": "1",
   *     "Statement": [
   *         {
   *             "Action": [
   *                 "ots:*"
   *             ],
   *             "Resource": [
   *                 "acs:ots:*:13791xxxxxxxxxxx:agentstorage/myagentstorage*"
   *             ],
   *             "Principal": [
   *                 "*"
   *             ],
   *             "Effect": "Allow",
   *             "Condition": {
   *                 "StringEquals": {
   *                     "ots:TLSVersion": [
   *                         "1.2"
   *                     ]
   *                 },
   *                 "IpAddress": {
   *                     "acs:SourceIp": [
   *                         "192.168.0.1",
   *                         "172.16.0.1"
   *                     ]
   *                 }
   *             }
   *         }
   *     ]
   * }
   */
  policy?: string;
  /**
   * @remarks
   * The version of the agent storage access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  policyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      policy: 'string',
      policyVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

