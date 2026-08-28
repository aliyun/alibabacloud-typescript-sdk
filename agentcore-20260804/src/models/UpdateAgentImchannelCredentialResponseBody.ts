// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentIMChannelCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of configured secret field names. Secret values are not included.
   */
  configuredSecretFields?: string[];
  /**
   * @remarks
   * The non-sensitive credential fields and their values.
   */
  nonSecretFields?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      configuredSecretFields: 'configuredSecretFields',
      nonSecretFields: 'nonSecretFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuredSecretFields: { 'type': 'array', 'itemType': 'string' },
      nonSecretFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.configuredSecretFields)) {
      $dara.Model.validateArray(this.configuredSecretFields);
    }
    if(this.nonSecretFields) {
      $dara.Model.validateMap(this.nonSecretFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentIMChannelCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The summary of the updated IM channel credential.
   */
  data?: UpdateAgentIMChannelCredentialResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The result message of the request.
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
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateAgentIMChannelCredentialResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

