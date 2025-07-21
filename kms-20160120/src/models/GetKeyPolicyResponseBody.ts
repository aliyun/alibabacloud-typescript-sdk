// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeyPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * {"Statement": [{"Action": ["kms:*"],"Effect": "Allow","Principal": {"RAM": ["acs:ram::190325303126****:*","acs:ram::119285303511****:*"]},"Resource": ["*"],"Sid": "kms default key policy"}],"Version": "1" }
   */
  policy?: string;
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3B84B523C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

