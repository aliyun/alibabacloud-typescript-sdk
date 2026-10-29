// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RotateTokenPlanKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The system-generated API key ID.
   * 
   * @example
   * ak_123456
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The new masked API key returned by Model Studio, such as sk_***cdef.
   * 
   * @example
   * sk_***6
   */
  maskedApiKey?: string;
  /**
   * @remarks
   * The new plaintext API key returned by Model Studio. This key is returned only once upon reset.
   * 
   * @example
   * sk-ws.abc123456
   */
  plainApiKey?: string;
  /**
   * @remarks
   * The reset time.
   * 
   * @example
   * 2025-07-18T03:19:17Z
   */
  resetAt?: string;
  /**
   * @remarks
   * The source_id returned by Model Studio.
   * 
   * @example
   * 123456
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      maskedApiKey: 'MaskedApiKey',
      plainApiKey: 'PlainApiKey',
      resetAt: 'ResetAt',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
      maskedApiKey: 'string',
      plainApiKey: 'string',
      resetAt: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateTokenPlanKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: RotateTokenPlanKeyResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RotateTokenPlanKeyResponseBodyData,
      message: 'string',
      success: 'boolean',
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

