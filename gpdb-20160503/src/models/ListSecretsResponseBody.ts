// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsResponseBodySecretsSecrets extends $dara.Model {
  accountId?: string;
  DBInstanceId?: string;
  description?: string;
  regionId?: string;
  secretArn?: string;
  secretName?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
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

export class ListSecretsResponseBodySecrets extends $dara.Model {
  secrets?: ListSecretsResponseBodySecretsSecrets[];
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretsSecrets },
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

export class ListSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of access credentials.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  secrets?: ListSecretsResponseBodySecrets;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      message: 'Message',
      requestId: 'RequestId',
      secrets: 'Secrets',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      message: 'string',
      requestId: 'string',
      secrets: ListSecretsResponseBodySecrets,
      status: 'string',
    };
  }

  validate() {
    if(this.secrets && typeof (this.secrets as any).validate === 'function') {
      (this.secrets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

