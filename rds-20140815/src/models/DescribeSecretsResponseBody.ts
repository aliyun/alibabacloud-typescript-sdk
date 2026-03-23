// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecretsResponseBodySecrets extends $dara.Model {
  accountId?: string;
  description?: string;
  regionId?: string;
  secretArn?: string;
  secretName?: string;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

