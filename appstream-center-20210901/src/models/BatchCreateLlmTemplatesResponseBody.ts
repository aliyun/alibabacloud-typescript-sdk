// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateLlmTemplatesResponseBodyDataSkippedItems extends $dara.Model {
  /**
   * @remarks
   * The model code that is skipped.
   * 
   * @example
   * qwen3.5-plus
   */
  llmCode?: string;
  /**
   * @remarks
   * The reason why the model is skipped.
   * 
   * @example
   * LLM template already exists with same providerTemplateId and llmCode.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      llmCode: 'LlmCode',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmCode: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateLlmTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the model templates that are created.
   */
  llmTemplateIds?: string[];
  /**
   * @remarks
   * The list of skipped model configuration items.
   */
  skippedItems?: BatchCreateLlmTemplatesResponseBodyDataSkippedItems[];
  /**
   * @remarks
   * The number of model templates that are created.
   * 
   * @example
   * 5
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      llmTemplateIds: 'LlmTemplateIds',
      skippedItems: 'SkippedItems',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmTemplateIds: { 'type': 'array', 'itemType': 'string' },
      skippedItems: { 'type': 'array', 'itemType': BatchCreateLlmTemplatesResponseBodyDataSkippedItems },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.llmTemplateIds)) {
      $dara.Model.validateArray(this.llmTemplateIds);
    }
    if(Array.isArray(this.skippedItems)) {
      $dara.Model.validateArray(this.skippedItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateLlmTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: BatchCreateLlmTemplatesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchCreateLlmTemplatesResponseBodyData,
      requestId: 'string',
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

