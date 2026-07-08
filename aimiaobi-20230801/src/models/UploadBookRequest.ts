// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadBookRequestDocs extends $dara.Model {
  /**
   * @remarks
   * Document name
   * 
   * @example
   * 文档1.pdf
   */
  docName?: string;
  /**
   * @remarks
   * File URL
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

export class UploadBookRequest extends $dara.Model {
  /**
   * @remarks
   * Folder ID
   * 
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * Documents
   * 
   * This parameter is required.
   */
  docs?: UploadBookRequestDocs[];
  /**
   * @remarks
   * Unique identifier of your Alibaba Cloud Model Studio workspace. [Get your workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
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

