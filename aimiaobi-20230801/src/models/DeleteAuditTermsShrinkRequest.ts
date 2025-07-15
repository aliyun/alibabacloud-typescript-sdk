// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuditTermsShrinkRequest extends $dara.Model {
  idListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      idListShrink: 'IdList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idListShrink: 'string',
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

