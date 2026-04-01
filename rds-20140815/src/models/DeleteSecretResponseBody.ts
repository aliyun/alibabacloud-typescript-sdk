// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF4961DD-16F5-5B24-BD4C-0C7788F7ADAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ARN of the credential for the Data API account.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretArn: 'string',
      secretName: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

