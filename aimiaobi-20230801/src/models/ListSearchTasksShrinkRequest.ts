// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTasksShrinkRequest extends $dara.Model {
  /**
   * @example
   * 24
   */
  dialogueTypesShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTypesShrink: 'DialogueTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTypesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

