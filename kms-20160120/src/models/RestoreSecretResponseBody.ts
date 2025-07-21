// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * e4885adf-548f-4ca5-8075-f540bbd3a55f
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

