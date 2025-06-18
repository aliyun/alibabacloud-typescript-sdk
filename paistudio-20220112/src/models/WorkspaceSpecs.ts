// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkspaceSpec } from "./WorkspaceSpec";


export class WorkspaceSpecs extends $dara.Model {
  product?: string;
  specs?: WorkspaceSpec[];
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      specs: 'Specs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      specs: { 'type': 'array', 'itemType': WorkspaceSpec },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

