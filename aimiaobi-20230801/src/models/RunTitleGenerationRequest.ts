// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunTitleGenerationRequestReferenceData } from "./RunTitleGenerationRequestReferenceData";


export class RunTitleGenerationRequest extends $dara.Model {
  deduplicatedTitles?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunTitleGenerationRequestReferenceData;
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

