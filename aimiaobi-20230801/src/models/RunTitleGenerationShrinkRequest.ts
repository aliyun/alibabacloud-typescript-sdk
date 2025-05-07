// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTitleGenerationShrinkRequest extends $dara.Model {
  deduplicatedTitlesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  titleCount?: string;
  /**
   * @remarks
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

