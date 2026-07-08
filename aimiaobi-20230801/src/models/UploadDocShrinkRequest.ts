// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocShrinkRequest extends $dara.Model {
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
  docsShrink?: string;
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
      docsShrink: 'Docs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docsShrink: 'string',
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

