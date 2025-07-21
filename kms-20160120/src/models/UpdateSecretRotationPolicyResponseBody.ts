// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretRotationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2c124f6f-4210-499f-b88a-69f54004d2d8
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

