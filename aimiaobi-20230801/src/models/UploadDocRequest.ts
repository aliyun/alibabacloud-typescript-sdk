// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocRequestDocs extends $dara.Model {
  /**
   * @remarks
   * document Name
   * 
   * This parameter is required.
   * 
   * @example
   * 文档1.pdf
   */
  docName?: string;
  /**
   * @remarks
   * file URL
   * 
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
   * @remarks
   * Folder where the document resides. If no value is provided, it defaults to "default".
   * 
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * Document
   * 
   * This parameter is required.
   */
  docs?: UploadDocRequestDocs[];
  /**
   * @remarks
   * Unique identifier (UUID) of the Alibaba Cloud Model Studio workspace: obtain the [Workspace ID](https://help.aliyun.com/document_detail/2587495.html)
   * 
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

