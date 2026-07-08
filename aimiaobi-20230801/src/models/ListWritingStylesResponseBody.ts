// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WritingStyleTemplateDefine } from "./WritingStyleTemplateDefine";


export class ListWritingStylesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template definition for step-by-step writing.
   */
  distributeStepTemplateDefine?: WritingStyleTemplateDefine;
  /**
   * @remarks
   * Indicates whether step-by-step writing is supported.
   * 
   * @example
   * false
   */
  distributeWriting?: boolean;
  /**
   * @remarks
   * The icon for the writing style, represented by a character.
   * 
   * @example
   * 小图标
   */
  emoji?: string;
  /**
   * @remarks
   * The description of the writing style.
   * 
   * @example
   * 文体描述
   */
  styleDescription?: string;
  /**
   * @remarks
   * The image for the writing style.
   * 
   * @example
   * 文体图片
   */
  styleImage?: string;
  /**
   * @remarks
   * The unique key of the writing style.
   * 
   * @example
   * 文体唯一标识
   */
  styleKey?: string;
  /**
   * @remarks
   * The name of the writing style.
   * 
   * @example
   * 文体名称
   */
  styleName?: string;
  /**
   * @remarks
   * The template definition for the writing style.
   */
  templateDefine?: WritingStyleTemplateDefine;
  static names(): { [key: string]: string } {
    return {
      distributeStepTemplateDefine: 'DistributeStepTemplateDefine',
      distributeWriting: 'DistributeWriting',
      emoji: 'Emoji',
      styleDescription: 'StyleDescription',
      styleImage: 'StyleImage',
      styleKey: 'StyleKey',
      styleName: 'StyleName',
      templateDefine: 'TemplateDefine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeStepTemplateDefine: WritingStyleTemplateDefine,
      distributeWriting: 'boolean',
      emoji: 'string',
      styleDescription: 'string',
      styleImage: 'string',
      styleKey: 'string',
      styleName: 'string',
      templateDefine: WritingStyleTemplateDefine,
    };
  }

  validate() {
    if(this.distributeStepTemplateDefine && typeof (this.distributeStepTemplateDefine as any).validate === 'function') {
      (this.distributeStepTemplateDefine as any).validate();
    }
    if(this.templateDefine && typeof (this.templateDefine as any).validate === 'function') {
      (this.templateDefine as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWritingStylesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The list of writing styles.
   */
  data?: ListWritingStylesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * 下一页token
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListWritingStylesResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
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

