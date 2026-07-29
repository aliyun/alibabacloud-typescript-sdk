// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterApiKeyResponseBodyApiKey extends $dara.Model {
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
   * The creation time.
   * 
   * @example
   * 2026-06-12T03:41:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 393
   */
  id?: string;
  /**
   * @remarks
   * The API key status.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      createTime: 'string',
      description: 'string',
      id: 'string',
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

export class CreateAIDBClusterApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key.
   */
  apiKey?: CreateAIDBClusterApiKeyResponseBodyApiKey;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
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
      apiKey: CreateAIDBClusterApiKeyResponseBodyApiKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKey && typeof (this.apiKey as any).validate === 'function') {
      (this.apiKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

