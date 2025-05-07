// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

