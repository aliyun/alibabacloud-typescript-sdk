// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeUncordonParameters extends $dara.Model {
  quotaId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

