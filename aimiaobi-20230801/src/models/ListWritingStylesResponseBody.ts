// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WritingStyleTemplateDefine } from "./WritingStyleTemplateDefine";


export class ListWritingStylesResponseBodyData extends $dara.Model {
  distributeStepTemplateDefine?: WritingStyleTemplateDefine;
  /**
   * @example
   * false
   */
  distributeWriting?: boolean;
  emoji?: string;
  styleDescription?: string;
  styleImage?: string;
  styleKey?: string;
  styleName?: string;
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
   * @example
   * successful
   */
  code?: string;
  data?: ListWritingStylesResponseBodyData[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  message?: string;
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
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

