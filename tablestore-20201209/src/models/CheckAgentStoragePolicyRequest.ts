// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAgentStoragePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The agent storage name.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The agent storage access control policy in JSON format.
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
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

