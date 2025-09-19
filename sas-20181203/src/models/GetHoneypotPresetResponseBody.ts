// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotPresetResponseBodyDataFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the uploaded file.
   * 
   * @example
   * HONEYPOT_FILE/1765_167040128****
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the uploaded file.
   * 
   * @example
   * HONEYPOT_FILE****
   */
  fileName?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * http://aegis****
   */
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotPresetResponseBodyData extends $dara.Model {
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
   * An array that consists of the configurations of the uploaded file.
   */
  fileInfoList?: GetHoneypotPresetResponseBodyDataFileInfoList[];
  /**
   * @remarks
   * The display name of the honeypot image.
   * 
   * @example
   * RuoYi
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * ruoyi
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The ID of the honeypot template.
   * 
   * @example
   * 94fd8805-d178-4361-84d3-de47fb4e****
   */
  honeypotPresetId?: string;
  /**
   * @remarks
   * The custom configuration of the honeypot template.
   * 
   * @example
   * {"trojan_git":"zip","burp":"open","portrait_option":"true"}
   */
  meta?: string;
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
   * The custom name of the honeypot template.
   * 
   * @example
   * ssh
   */
  presetName?: string;
  /**
   * @remarks
   * The type of the honeypot template. Valid values:
   * 
   * *   **TEMP**: automatically generated template
   * *   **CUSTOM**: custom template
   * *   **DEFAULT**: default template
   * 
   * @example
   * CUSTOM
   */
  presetType?: string;
  static names(): { [key: string]: string } {
    return {
      controlNodeName: 'ControlNodeName',
      fileInfoList: 'FileInfoList',
      honeypotImageDisplayName: 'HoneypotImageDisplayName',
      honeypotImageName: 'HoneypotImageName',
      honeypotPresetId: 'HoneypotPresetId',
      meta: 'Meta',
      nodeId: 'NodeId',
      presetName: 'PresetName',
      presetType: 'PresetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlNodeName: 'string',
      fileInfoList: { 'type': 'array', 'itemType': GetHoneypotPresetResponseBodyDataFileInfoList },
      honeypotImageDisplayName: 'string',
      honeypotImageName: 'string',
      honeypotPresetId: 'string',
      meta: 'string',
      nodeId: 'string',
      presetName: 'string',
      presetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotPresetResponseBody extends $dara.Model {
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
   * The information about the honeypot template.
   */
  data?: GetHoneypotPresetResponseBodyData;
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
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 38AFE393-88E8-5642-B3E2-D57C6E76025D
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
      data: GetHoneypotPresetResponseBodyData,
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

