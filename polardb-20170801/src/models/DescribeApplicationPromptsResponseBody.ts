// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationPromptsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * prompt if enabled
   */
  promptEnabled?: number;
  /**
   * @example
   * papt-58z96zl691otf356o4
   */
  promptId?: string;
  /**
   * @example
   * prompt name
   */
  promptName?: string;
  /**
   * @example
   * DELETE_RELATIONS_SYSTEM_PROMPT
   */
  promptType?: string;
  /**
   * @example
   * prompt value
   */
  promptValue?: string;
  static names(): { [key: string]: string } {
    return {
      promptEnabled: 'PromptEnabled',
      promptId: 'PromptId',
      promptName: 'PromptName',
      promptType: 'PromptType',
      promptValue: 'PromptValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptEnabled: 'number',
      promptId: 'string',
      promptName: 'string',
      promptType: 'string',
      promptValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationPromptsResponseBody extends $dara.Model {
  items?: DescribeApplicationPromptsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeApplicationPromptsResponseBodyItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

