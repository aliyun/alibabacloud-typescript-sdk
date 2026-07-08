// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTitleGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of titles to deduplicate against the newly generated titles. The total character count for all titles must not exceed 5K.
   */
  deduplicatedTitlesShrink?: string;
  /**
   * @remarks
   * Data for title generation.
   * 
   * This parameter is required.
   */
  referenceDataShrink?: string;
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
      deduplicatedTitlesShrink: 'DeduplicatedTitles',
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      titleCount: 'TitleCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deduplicatedTitlesShrink: 'string',
      referenceDataShrink: 'string',
      taskId: 'string',
      titleCount: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

