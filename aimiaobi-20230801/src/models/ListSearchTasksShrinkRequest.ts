// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Task type
   * 
   * @example
   * 24
   */
  dialogueTypesShrink?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page. Default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Obtain workspaceId]().
   * 
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

