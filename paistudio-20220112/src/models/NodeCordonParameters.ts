// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeCordonParameters extends $dara.Model {
  /**
   * @remarks
   * User-configurable reason for disabling scheduling
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * Quota ID, used when disabling edge zone scheduling in a workspace
   * 
   * @example
   * quota1dkoutl3tj1
   */
  quotaId?: string;
  /**
   * @remarks
   * Workspace ID, used when disabling edge zone scheduling in a workspace
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      quotaId: 'string',
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

