// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthCodeRequest extends $dara.Model {
  autoCreateUser?: boolean;
  /**
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @example
   * alice
   */
  externalUserId?: string;
  /**
   * @example
   * {
   *       "Version": "1",
   *       "Resource": {
   *             "Type": "AppInstanceGroup",
   *             "Id": "aig-9ciijz60n4xsv****"
   *       }
   * }
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateUser: 'AutoCreateUser',
      endUserId: 'EndUserId',
      externalUserId: 'ExternalUserId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateUser: 'boolean',
      endUserId: 'string',
      externalUserId: 'string',
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

