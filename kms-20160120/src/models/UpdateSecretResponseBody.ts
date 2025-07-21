// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
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

