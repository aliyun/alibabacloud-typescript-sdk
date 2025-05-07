// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docIdsShrink?: string;
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
      docIdsShrink: 'DocIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIdsShrink: 'string',
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

