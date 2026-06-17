// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationPromptsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the Prompt is enabled. A value of 1 indicates enabled, and 0 indicates disabled.
   * 
   * @example
   * prompt if enabled
   */
  promptEnabled?: number;
  /**
   * @remarks
   * The Prompt ID.
   * 
   * @example
   * papt-58z96zl691otf356o4
   */
  promptId?: string;
  /**
   * @remarks
   * The Prompt Name.
   * 
   * @example
   * prompt name
   */
  promptName?: string;
  /**
   * @remarks
   * The Prompt Type.
   * 
   * @example
   * DELETE_RELATIONS_SYSTEM_PROMPT
   */
  promptType?: string;
  /**
   * @remarks
   * The Prompt Value.
   * 
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
  /**
   * @remarks
   * A list of Application Prompts.
   */
  items?: DescribeApplicationPromptsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching entries.
   * 
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

