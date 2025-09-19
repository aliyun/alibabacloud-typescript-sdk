// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopHoneypotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the management node to which the honeypot belongs.
   * 
   * @example
   * managerNoden****
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
   * The display name of the image.
   * 
   * @example
   * RuoYi
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the image that is used for the honeypot.
   * 
   * @example
   * metabase
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The name of the honeypot.
   * 
   * @example
   * hyl-phpmya****
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
   * The ID of the honeypot custom parameter.
   * 
   * @example
   * 868a7579-00b5-4a74-999d-8bd3f411****
   */
  presetId?: string;
  /**
   * @remarks
   * The statuses of the honeypots.
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

export class StopHoneypotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: StopHoneypotResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: StopHoneypotResponseBodyData,
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

