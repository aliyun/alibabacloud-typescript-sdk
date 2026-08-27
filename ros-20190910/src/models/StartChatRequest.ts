// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartChatRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * The image media type. Valid values: image/png, image/jpeg, image/webp, and image/gif.
   * 
   * @example
   * image/png
   */
  mimeType?: string;
  /**
   * @remarks
   * The attachment file name. If this parameter is not specified, the file name is obtained from OssObjectKey.
   * 
   * @example
   * topology.png
   */
  name?: string;
  /**
   * @remarks
   * The OSS object key under the current user directory. The value cannot contain absolute paths or path traversal.
   * 
   * @example
   * user-id/attachments/topology.png
   */
  ossObjectKey?: string;
  /**
   * @remarks
   * The attachment type. V2 currently supports only image.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * V2 does not support direct URL upload. Use OssObjectKey instead.
   * 
   * @example
   * https://example.com/topology.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      mimeType: 'MimeType',
      name: 'Name',
      ossObjectKey: 'OssObjectKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mimeType: 'string',
      name: 'string',
      ossObjectKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatRequest extends $dara.Model {
  /**
   * @remarks
   * Set this parameter to V2 to route requests to the ROS Agent V2 backend.
   * 
   * @example
   * V2
   */
  agentVersion?: string;
  /**
   * @remarks
   * The array of image attachments. A maximum of 5 attachments are supported. Currently, only the image type is supported.
   * 
   * @example
   * [{"Type":"image","MimeType":"image/png","Name":"topology.png","OssObjectKey":"user-id/attachments/topology.png"}]
   */
  attachments?: StartChatRequestAttachments[];
  /**
   * @remarks
   * A compatibility field. V2 always returns event streams through SSE. The current service does not consume this field.
   * 
   * @example
   * true
   */
  enablePartialMessage?: boolean;
  /**
   * @remarks
   * Specifies whether to output thinking content. Default value: true. This parameter can be reset per request when re-entering the same session.
   * 
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * V2 supports only IaCCodeNormal or IaCCodePipeline. The default value for a new session is IaCCodeNormal. An existing session cannot switch modes.
   * 
   * @example
   * IaCCodeNormal
   */
  mode?: string;
  /**
   * @remarks
   * The user input. The value cannot be empty or contain only whitespace characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Create an ROS template with a VPC and a VSwitch
   */
  query?: string;
  /**
   * @remarks
   * The region ID for this resource operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * If this parameter is not specified, a new session is created. If this parameter is specified, the existing session of the current user is continued.
   * 
   * @example
   * 7f4e2a8c6d9b4a1f8e3c5b7d2a6f9012
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      attachments: 'Attachments',
      enablePartialMessage: 'EnablePartialMessage',
      enableThinking: 'EnableThinking',
      mode: 'Mode',
      query: 'Query',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      attachments: { 'type': 'array', 'itemType': StartChatRequestAttachments },
      enablePartialMessage: 'boolean',
      enableThinking: 'boolean',
      mode: 'string',
      query: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

