// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTitleGenerationRequestReferenceData extends $dara.Model {
  /**
   * @remarks
   * List of main content.
   * 
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of titles to deduplicate against the newly generated titles. The total character count for all titles must not exceed 5K.
   */
  deduplicatedTitles?: string[];
  /**
   * @remarks
   * Data for title generation.
   * 
   * This parameter is required.
   */
  referenceData?: RunTitleGenerationRequestReferenceData;
  /**
   * @remarks
   * The unique identifier for the associated creative article.
   * 
   * > The system automatically generates the TaskId by default. You do not need to specify it. If subsequent tasks use the same TaskId, they belong to the same conversation group.
   * 
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * Number of titles to generate, maximum 10.
   * 
   * @example
   * 10
   */
  titleCount?: string;
  /**
   * @remarks
   * The unique identifier for the Alibaba Cloud Model Studio workspace. For more information, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deduplicatedTitles: 'DeduplicatedTitles',
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      titleCount: 'TitleCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deduplicatedTitles: { 'type': 'array', 'itemType': 'string' },
      referenceData: RunTitleGenerationRequestReferenceData,
      taskId: 'string',
      titleCount: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deduplicatedTitles)) {
      $dara.Model.validateArray(this.deduplicatedTitles);
    }
    if(this.referenceData && typeof (this.referenceData as any).validate === 'function') {
      (this.referenceData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

