// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstancePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * workshop-bj-ots1
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance policy in the JSON format.
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
   *                 "acs:ots:*:13791xxxxxxxxxxx:instance/myinstance*"
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
      instanceName: 'InstanceName',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
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

