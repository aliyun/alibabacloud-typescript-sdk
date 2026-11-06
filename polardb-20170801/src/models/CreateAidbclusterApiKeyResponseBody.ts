// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterApiKeyResponseBodyApiKey extends $dara.Model {
  /**
   * @remarks
   * The API key for the model service.
   * 
   * @example
   * 6c4b1f0317cd4fd7a5b446d3503d**
   */
  apiKey?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The time is displayed in ISO 8601 format in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
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
   * The API key ID.
   * 
   * @example
   * 393
   */
  id?: string;
  /**
   * @remarks
   * The status of the API key.
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
   * The request ID.
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

