// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the honeypot.
   * 
   * @example
   * 9bf8cd373112263d4bc102fc5dba9d9f812ee05d4d35c487d330d52e937f****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The display name of the honeypot image.
   * 
   * @example
   * Webmin
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * webpage
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The custom name of the honeypot.
   * 
   * @example
   * hyl-phpmyadmin
   */
  honeypotName?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the custom configuration for the honeypot.
   * 
   * @example
   * 868a7579-00b5-4a74-999d-8bd3f411e8a3
   */
  presetId?: string;
  /**
   * @remarks
   * An array that consists of the status information about the honeypot.
   */
  state?: string[];
  static names(): { [key: string]: string } {
    return {
      honeypotId: 'HoneypotId',
      honeypotImageDisplayName: 'HoneypotImageDisplayName',
      honeypotImageName: 'HoneypotImageName',
      honeypotName: 'HoneypotName',
      nodeId: 'NodeId',
      presetId: 'PresetId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotId: 'string',
      honeypotImageDisplayName: 'string',
      honeypotImageName: 'string',
      honeypotName: 'string',
      nodeId: 'string',
      presetId: 'string',
      state: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.state)) {
      $dara.Model.validateArray(this.state);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHoneypotResponseBody extends $dara.Model {
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
   * The information about the honeypot.
   */
  data?: UpdateHoneypotResponseBodyData;
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
   * 3B323ADD-6CF8-51F6-9047-2F0A4E3F5EFD
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateHoneypotResponseBodyData,
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

