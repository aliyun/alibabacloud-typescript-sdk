// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditableNamespace extends $dara.Model {
  namespace?: string;
  role?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      role: 'Role',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      role: 'string',
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

