// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key of the model service.
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 068F730C-9130-596E-B696-5B4388C840DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
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

