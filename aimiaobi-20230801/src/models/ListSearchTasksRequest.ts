// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Task type
   * 
   * @example
   * 24
   */
  dialogueTypes?: number[];
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
      dialogueTypes: 'DialogueTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTypes: { 'type': 'array', 'itemType': 'number' },
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueTypes)) {
      $dara.Model.validateArray(this.dialogueTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

