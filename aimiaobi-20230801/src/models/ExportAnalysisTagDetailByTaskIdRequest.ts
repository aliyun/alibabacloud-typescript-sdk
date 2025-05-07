// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportAnalysisTagDetailByTaskIdRequest extends $dara.Model {
  categories?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

