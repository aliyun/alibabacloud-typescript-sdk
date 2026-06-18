// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * <props="china">
   * 
   * The metadata map of the text chunk.
   * 
   * > The `file_path` field in the metadata map of document search knowledge bases is meaningless. Do not use it in your business code.
   * 
   * > When retrieving a document search knowledge base, if a chunk contains an image, the image is returned through the `image_url` field in the metadata map, along with an expiration time.
   * 
   * > When retrieving an audio/video search knowledge base, if a chunk contains audio, the audio is returned through the `audio_url` field in the metadata map, along with an expiration time.
   * 
   * > When retrieving an audio/video search knowledge base, if a chunk contains video, the video is returned through the `video_url` field in the metadata map, along with an expiration time.
   * 
   * 
   * <props="intl">
   * 
   * The metadata map of the text chunk.
   * 
   * > The `file_path` field in the metadata map of document search knowledge bases is meaningless. Do not use it in your business code.
   * 
   * > When retrieving a document search knowledge base, if a chunk contains an image, the image is returned through the `image_url` field in the metadata map, along with an expiration time.
   * 
   * .
   * 
   * @example
   * {
   *   "file_path": "https://bailian-***",
   *   "parent": "阿里云百炼是一站式的大模型开发及应用构建平台。不论是开发者还是业务人员，都能深入参与大模型应用的设计和构建。您可以通过简单的界面操作，在 5分钟内开发出一款大模型应用，或在几小时内训练出一个专属模型，从而将更多精力专注于应用创新。",
   *   "is_displayed_chunk_content": "true",
   *   "image_url": [],
   *   "nid": "83***",
   *   "source": "0",
   *   "_score": 0,
   *   "title": "",
   *   "doc_id": "file_24e***",
   *   "content": "阿里云百炼是一站式的大模型开发及应用构建平台。不论是开发者还是业务人员，都能深入参与大模型应用的设计和构建。您可以通过简单的界面操作，在 5分钟内开发出一款大模型应用，或在几小时内训练出一个专属模型，从而将更多精力专注于应用创新。",
   *   "_rc_score": 0,
   *   "workspace_id": "llm-zna***",
   *   "hier_title": "",
   *   "doc_name": "什么是阿里云百炼",
   *   "pipeline_id": "j6b***",
   *   "_id": "llm-zna5***"
   * }
   */
  metadata?: any;
  /**
   * @remarks
   * The similarity score of the text chunk.
   * 
   * @example
   * 0
   */
  score?: number;
  /**
   * @remarks
   * The content of the text chunk.
   * 
   * @example
   * 阿里云百炼是一站式的大模型开发及应用构建平台。不论是开发者还是业务人员，都能深入参与大模型应用的设计和构建。您可以通过简单的界面操作，在 5分钟内开发出一款大模型应用，或在几小时内训练出一个专属模型，从而将更多精力专注于应用创新。
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

export class ListChunksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of text chunks.
   */
  nodes?: ListChunksResponseBodyDataNodes[];
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListChunksResponseBodyDataNodes },
      total: 'number',
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

export class ListChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the operation.
   */
  data?: ListChunksResponseBodyData;
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
   * 8F97A63B-xxxx-527F-9D6E-467B6A7E8CF1
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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
      data: ListChunksResponseBodyData,
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

