// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocRequestDocs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx/ccc.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docs?: UploadDocRequestDocs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-yigtrrjl377rcbab
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
      docs: { 'type': 'array', 'itemType': UploadDocRequestDocs },
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

