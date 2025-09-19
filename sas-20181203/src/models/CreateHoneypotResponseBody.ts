// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * managerNodename
   */
  controlNodeName?: string;
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
   * HoneyDisplayName
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * tcp_proxy
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The custom name of the honeypot.
   * 
   * @example
   * ruoyi
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
   * ddh3731641137fe4b72b245346a2721d4b6tdgg3731641137fe4b72b245346a2721***
   */
  presetId?: string;
  /**
   * @remarks
   * An array that consists of the status information about the honeypot.
   */
  state?: string[];
  static names(): { [key: string]: string } {
    return {
      controlNodeName: 'ControlNodeName',
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
      controlNodeName: 'string',
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

export class CreateHoneypotResponseBody extends $dara.Model {
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
  data?: CreateHoneypotResponseBodyData;
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
   * The error message returned.
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
   * 29874225-EAAC-5415-8501-32DD20FD29F6
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
      data: CreateHoneypotResponseBodyData,
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

