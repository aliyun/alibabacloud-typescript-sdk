// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportAnalysisTagDetailByTaskIdRequest extends $dara.Model {
  /**
   * @remarks
   * Category filter list.
   */
  categories?: string[];
  /**
   * @remarks
   * Unique task ID.
   * 
   * > By default, do not specify TaskId. The system automatically generates it. If subsequent tasks use the same TaskId, they belong to the same conversation group.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier for Alibaba Cloud Model Studio workspace. For more information, see [Get Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

