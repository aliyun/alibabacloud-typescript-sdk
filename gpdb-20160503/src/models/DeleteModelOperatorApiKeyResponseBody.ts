// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelOperatorApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the API key for which the deletion is accepted. The return of this field does not indicate that the underlying cleanup is complete.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate and troubleshoot the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

