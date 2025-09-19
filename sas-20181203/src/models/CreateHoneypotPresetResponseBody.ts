// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotPresetResponseBodyHoneypotPreset extends $dara.Model {
  /**
   * @remarks
   * The ID of the honeypot template.
   * 
   * @example
   * d6ece172-34d9-4942-99a4-b309cb55xxxx
   */
  honeypotPresetId?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotPresetId: 'HoneypotPresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotPresetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHoneypotPresetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The creation result.
   */
  honeypotPreset?: CreateHoneypotPresetResponseBodyHoneypotPreset;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7C1C6E65-C8B9-54C9-9F92-2F5E51C4E16D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      honeypotPreset: 'HoneypotPreset',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      honeypotPreset: CreateHoneypotPresetResponseBodyHoneypotPreset,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.honeypotPreset && typeof (this.honeypotPreset as any).validate === 'function') {
      (this.honeypotPreset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

