// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadBookRequestDocs } from "./UploadBookRequestDocs";


export class UploadBookRequest extends $dara.Model {
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docs?: UploadBookRequestDocs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ipe7d81yq4sl5jmk
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docs: 'Docs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docs: { 'type': 'array', 'itemType': UploadBookRequestDocs },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docs)) {
      $dara.Model.validateArray(this.docs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

