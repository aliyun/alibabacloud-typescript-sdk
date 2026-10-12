// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketApiKeyConfig } from "./HiMarketApiKeyConfig";
import { HiMarketHmacConfig } from "./HiMarketHmacConfig";


export class GetHiMarketConsumerCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API key credential configuration of the consumer. This corresponds to the common data structure HiMarketApiKeyConfig and includes the key, source, and credentials list members. Each item in the credentials list contains an apiKey.
   */
  apiKeyConfig?: HiMarketApiKeyConfig;
  /**
   * @remarks
   * The HMAC credential configuration of the consumer. This corresponds to the common data structure HiMarketHmacConfig and includes the credentials list member. Each item in the credentials list contains an ak and an sk.
   */
  hmacConfig?: HiMarketHmacConfig;
  static names(): { [key: string]: string } {
    return {
      apiKeyConfig: 'apiKeyConfig',
      hmacConfig: 'hmacConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyConfig: HiMarketApiKeyConfig,
      hmacConfig: HiMarketHmacConfig,
    };
  }

  validate() {
    if(this.apiKeyConfig && typeof (this.apiKeyConfig as any).validate === 'function') {
      (this.apiKeyConfig as any).validate();
    }
    if(this.hmacConfig && typeof (this.hmacConfig as any).validate === 'function') {
      (this.hmacConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHiMarketConsumerCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetHiMarketConsumerCredentialResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHiMarketConsumerCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

