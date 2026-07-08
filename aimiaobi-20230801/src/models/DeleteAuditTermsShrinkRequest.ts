// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuditTermsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of rule IDs for user logon audit terms to delete.
   */
  idListShrink?: string;
  /**
   * @remarks
   * Unique identifier for the Alibaba Cloud Model Studio workspace. Get the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

