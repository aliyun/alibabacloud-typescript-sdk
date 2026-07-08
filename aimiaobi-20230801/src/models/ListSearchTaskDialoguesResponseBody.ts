// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @remarks
   * The type.
   * 
   * @example
   * x\\"x
   */
  code?: string;
  /**
   * @remarks
   * The unique ID.
   * 
   * @example
   * xx
   */
  datasetName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * x
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam extends $dara.Model {
  endTime?: string;
  multimodalSearchTypes?: string[];
  /**
   * @remarks
   * The search sources.
   */
  searchSources?: ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources[];
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      multimodalSearchTypes: 'MultimodalSearchTypes',
      searchSources: 'SearchSources',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      multimodalSearchTypes: { 'type': 'array', 'itemType': 'string' },
      searchSources: { 'type': 'array', 'itemType': ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources },
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalSearchTypes)) {
      $dara.Model.validateArray(this.multimodalSearchTypes);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponseBodyDataChatConfig extends $dara.Model {
  /**
   * @remarks
   * The request type.
   * 
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @remarks
   * Indicates whether the process is end-to-end.
   */
  endToEnd?: boolean;
  /**
   * @remarks
   * The generation level.
   * 
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @remarks
   * The type of content generation.
   * 
   * @example
   * copilotReference
   */
  generateTechnology?: string;
  /**
   * @remarks
   * The search type.
   */
  searchModels?: string[];
  searchParam?: ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      dialogueType: 'DialogueType',
      endToEnd: 'EndToEnd',
      generateLevel: 'GenerateLevel',
      generateTechnology: 'GenerateTechnology',
      searchModels: 'SearchModels',
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueType: 'number',
      endToEnd: 'boolean',
      generateLevel: 'string',
      generateTechnology: 'string',
      searchModels: { 'type': 'array', 'itemType': 'string' },
      searchParam: ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParam,
    };
  }

  validate() {
    if(Array.isArray(this.searchModels)) {
      $dara.Model.validateArray(this.searchModels);
    }
    if(this.searchParam && typeof (this.searchParam as any).validate === 'function') {
      (this.searchParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   */
  chatConfig?: ListSearchTaskDialoguesResponseBodyDataChatConfig;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-11-25 13:33:01
   */
  createTime?: string;
  /**
   * @remarks
   * The type of generation.
   * 
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @remarks
   * The generated content that the customer rated as good.
   * 
   * @example
   * xxx
   */
  goodText?: string;
  /**
   * @remarks
   * The original session ID.
   * 
   * @example
   * xxxx
   */
  originSessionId?: string;
  /**
   * @remarks
   * The input prompt.
   * 
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @remarks
   * The rating of the content, which can be Like or Dislike.
   * 
   * @example
   * thumbsUp
   */
  rating?: string;
  /**
   * @remarks
   * The response body as a string.
   * 
   * @example
   * {}
   */
  responseBodyStr?: string;
  /**
   * @remarks
   * The unique ID of a single-turn conversation.
   * 
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The customer feedback.
   * 
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      createTime: 'CreateTime',
      dialogueType: 'DialogueType',
      goodText: 'GoodText',
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      rating: 'Rating',
      responseBodyStr: 'ResponseBodyStr',
      sessionId: 'SessionId',
      tags: 'Tags',
      taskId: 'TaskId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: ListSearchTaskDialoguesResponseBodyDataChatConfig,
      createTime: 'string',
      dialogueType: 'number',
      goodText: 'string',
      originSessionId: 'string',
      prompt: 'string',
      rating: 'string',
      responseBodyStr: 'string',
      sessionId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      text: 'string',
    };
  }

  validate() {
    if(this.chatConfig && typeof (this.chatConfig as any).validate === 'function') {
      (this.chatConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListSearchTaskDialoguesResponseBodyData[];
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
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSearchTaskDialoguesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

