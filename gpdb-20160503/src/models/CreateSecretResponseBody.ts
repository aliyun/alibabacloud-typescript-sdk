// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information returned by the operation.
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
  /**
   * @remarks
   * The ARN that uniquely identifies the logon credential and permissions of the Data API account created by the user.
   * Format: ```acs:gpdb:{{region}}:{{accountId}}:secret/{{secretName}}-{{32 digits random string}}```
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * testsecret
   */
  secretName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **success**: The operation is successful.
   * - **fail**: The operation failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      secretArn: 'string',
      secretName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

