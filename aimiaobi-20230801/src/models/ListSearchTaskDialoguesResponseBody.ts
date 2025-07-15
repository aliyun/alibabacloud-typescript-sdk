// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTaskDialoguesResponseBodyDataChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @example
   * x\"x
   */
  code?: string;
  /**
   * @example
   * xx
   */
  datasetName?: string;
  /**
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
   * @example
   * 24
   */
  dialogueType?: number;
  endToEnd?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @example
   * copilotReference
   */
  generateTechnology?: string;
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
  chatConfig?: ListSearchTaskDialoguesResponseBodyDataChatConfig;
  /**
   * @example
   * 2024-11-25 13:33:01
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @example
   * xxx
   */
  goodText?: string;
  /**
   * @example
   * xxxx
   */
  originSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * thumbsUp
   */
  rating?: string;
  /**
   * @example
   * {}
   */
  responseBodyStr?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  tags?: string[];
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
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
   * @example
   * NoData
   */
  code?: string;
  data?: ListSearchTaskDialoguesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

