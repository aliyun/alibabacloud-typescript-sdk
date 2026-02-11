// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Workspace } from "./Workspace";


export class ListWorkspacesOutput extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  workspaces?: Workspace[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      total: 'total',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      workspaces: { 'type': 'array', 'itemType': Workspace },
    };
  }

  validate() {
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

