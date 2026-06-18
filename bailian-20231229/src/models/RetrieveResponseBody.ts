// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * <props="china">
   * 
   * A map of metadata for the text chunk.
   * 
   * > For document search knowledge bases, the `file_path` field in the metadata map is not applicable and should not be used in your application code.
   * 
   * > When you retrieve data from a document search knowledge base, if a text chunk contains an image, its URL is returned in the `image_url` field of the metadata map. This URL expires.
   * 
   * > When you retrieve data from an audio/video search knowledge base, if a text chunk contains audio, its URL is returned in the `audio_url` field of the metadata map. This URL expires.
   * 
   * > When you retrieve data from an audio/video search knowledge base, if a text chunk contains video, its URL is returned in the `video_url` field of the metadata map. This URL expires.
   * 
   * 
   * 
   * <props="intl">
   * 
   * A map of metadata for the text chunk.
   * 
   * > For document search knowledge bases, the `file_path` field in the metadata map is not applicable and should not be used in your application code.
   * 
   * > When you retrieve data from a document search knowledge base, if a text chunk contains an image, its URL is returned in the `image_url` field of the metadata map. This URL expires.
   * 
   * @example
   * {
   *   "parent": "",
   *   "file_path": "https://***",
   *   "image_url": [
   *     "http://***"
   *   ],
   *   "nid": "***",
   *   "title": "阿里云百炼文档",
   *   "doc_id": "doc_***",
   *   "content": "阿里云百炼是基于通义大模型、行业大模型以及三方大模型的一站式大模型开发平台。面向企业客户和个人开发者，提供完整的模型服务工具和全链路应用开发套件，预置丰富的能力插件，提供API及SDK等便捷的集成方式，高效完成大模型应用构建",
   *   "workspace_id": "ws_***",
   *   "hier_title": "阿里云百炼文档",
   *   "doc_name": "阿里云百炼文档介绍.pdpf",
   *   "pipeline_id": "rhd***",
   *   "_id": "ws_***"
   * }
   */
  metadata?: any;
  /**
   * @remarks
   * The similarity score of the text chunk, ranging from 0 to 1.
   * 
   * @example
   * 0.3
   */
  score?: number;
  /**
   * @remarks
   * The content of the text chunk.
   * 
   * @example
   * 阿里云百炼是基于通义大模型、行业大模型以及三方大模型的一站式大模型开发平台。面向企业客户和个人开发者，提供完整的模型服务工具和全链路应用开发套件，预置丰富的能力插件，提供API及SDK等便捷的集成方式，高效完成大模型应用构建。
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      score: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array of retrieved text chunks.
   */
  nodes?: RetrieveResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': RetrieveResponseBodyDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the API.
   */
  data?: RetrieveResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code of the response.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: The call succeeded.
   * 
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RetrieveResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

