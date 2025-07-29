// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags extends $dara.Model {
  tagName?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      tagName: 'tagName',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  content?: string;
  contentTags?: ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags[];
  originResponse?: string;
  sourceList?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentTags: 'contentTags',
      originResponse: 'originResponse',
      sourceList: 'sourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentTags: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags },
      originResponse: 'string',
      sourceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contentTags)) {
      $dara.Model.validateArray(this.contentTags);
    }
    if(Array.isArray(this.sourceList)) {
      $dara.Model.validateArray(this.sourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListAnalysisTagDetailByTaskIdResponseBodyData[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

