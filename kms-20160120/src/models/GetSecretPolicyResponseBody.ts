// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * {"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }
   */
  policy?: string;
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C8
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

