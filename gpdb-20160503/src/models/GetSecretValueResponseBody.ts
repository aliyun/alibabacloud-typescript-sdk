// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Secret.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description of the access credential.
   * 
   * @example
   * test secret
   */
  description?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * @example
   * pwd123
   */
  password?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The ARN of the access credential for the created Data API account. Format: `acs:gpdb:{{region}}:{{accountId}}:secret/{{secretName}}-{{32 digits random string}`.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the access credential.
   * 
   * @example
   * testsecret
   */
  secretName?: string;
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * testacc
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      message: 'Message',
      password: 'Password',
      requestId: 'RequestId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      DBInstanceId: 'string',
      description: 'string',
      message: 'string',
      password: 'string',
      requestId: 'string',
      secretArn: 'string',
      secretName: 'string',
      status: 'string',
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

