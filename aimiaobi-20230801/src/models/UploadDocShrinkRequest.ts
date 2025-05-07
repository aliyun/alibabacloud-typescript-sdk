// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocShrinkRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docsShrink?: string;
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

