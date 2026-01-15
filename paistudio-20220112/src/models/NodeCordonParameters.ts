// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeCordonParameters extends $dara.Model {
  comment?: string;
  quotaId?: string;
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

