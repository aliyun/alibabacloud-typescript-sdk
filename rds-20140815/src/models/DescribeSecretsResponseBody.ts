// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecretsResponseBodySecrets extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1266348003****
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
   * The user credential of the Data API account.
   * 
   * @example
   * acs:rds:cn-hangzhou:1335786****:dbInstance/rm-bp1m7l3j63****
   */
  secretArn?: string;
  /**
   * @remarks
   * The credential name.
   * 
   * @example
   * Foo
   */
  secretName?: string;
  /**
   * @remarks
   * The database username.
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

export class DescribeSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF4961DD-16F5-5B24-BD4C-0C7788F7ADAF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of credential details.
   */
  secrets?: DescribeSecretsResponseBodySecrets[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secrets: { 'type': 'array', 'itemType': DescribeSecretsResponseBodySecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

