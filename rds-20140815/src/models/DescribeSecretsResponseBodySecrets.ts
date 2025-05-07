// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecretsResponseBodySecrets extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1266348003******
   */
  accountId?: string;
  /**
   * @remarks
   * The description of the credential.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the credential for the created Data API account.
   * 
   * @example
   * acs:rds:cn-hangzhou:1335786***:dbInstance/rm-bp1m7l3j63****
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * Foo
   */
  secretName?: string;
  /**
   * @remarks
   * The username that is used to access the database.
   * 
   * @example
   * user_jack
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      description: 'Description',
      regionId: 'RegionId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      description: 'string',
      regionId: 'string',
      secretArn: 'string',
      secretName: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

