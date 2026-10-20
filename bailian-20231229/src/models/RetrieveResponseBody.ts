// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * <props="china">
   * 
   * The metadata map of the text chunk.
   * 
   * > The file_path field in the metadata map of a document search knowledge base is meaningless. Do not use it in your business code.
   * 
   * > When you retrieve a document search knowledge base, if a chunk contains an image, the image is returned in the image_url field of the metadata map, along with an expiration time.
   * 
   * > When you retrieve an audio and video search knowledge base, if a chunk contains audio, the audio is returned in the audio_url field of the metadata map, along with an expiration time.
   * 
   * > When you retrieve an audio and video search knowledge base, if a chunk contains a video, the video is returned in the video_url field of the metadata map, along with an expiration time.
   * 
   * 
   * <props="intl">
   * 
   * The metadata map of the text chunk.
   * 
   * > The file_path field in the metadata map of a document search knowledge base is meaningless. Do not use it in your business code.
   * 
   * > When you retrieve a document search knowledge base, if a chunk contains an image, the image is returned in the image_url field of the metadata map, along with an expiration time.
   * 
   * @example
   * {
   *   "parent": "",
   *   "file_path": "https://***",
   *   "image_url": [
   *     "http://***"
   *   ],
   *   "nid": "***",
   *   "title": "Alibaba Cloud Model Studio Documentation",
   *   "doc_id": "doc_***",
   *   "content": "Alibaba Cloud Model Studio is a one-stop large model development platform based on Tongyi large models, industry large models, and third-party large models. It provides enterprise customers and individual developers with a complete set of model service tools and full-link application development kits, pre-installed with rich capability plugins, and offers convenient integration methods such as APIs and SDKs to efficiently build large model applications.",
   *   "workspace_id": "ws_***",
   *   "hier_title": "Alibaba Cloud Model Studio Documentation",
   *   "doc_name": "Introduction to Alibaba Cloud Model Studio Documentation.pdpf",
   *   "pipeline_id": "rhd***",
   *   "_id": "ws_***"
   * }
   */
  metadata?: any;
  /**
   * @remarks
   * The similarity score of the text chunk. Valid values: 0 to 1.
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
   * Alibaba Cloud Model Studio is a one-stop large model development platform based on Tongyi large models, industry large models, and third-party large models. It provides enterprise customers and individual developers with a complete set of model service tools and full-link application development kits, pre-installed with rich capability plugins, and offers convenient integration methods such as APIs and SDKs to efficiently build large model applications
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
   * The list of matched text chunks.
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
   * The business data field returned by the operation.
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
   * The status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
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

