// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadBookShrinkRequest extends $dara.Model {
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
  docsShrink?: string;
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

