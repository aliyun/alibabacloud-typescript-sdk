// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBlockRequestScopesBlockScopeClusterRelations } from "./CreateBlockRequestScopesBlockScopeClusterRelations";


export class CreateBlockRequestScopesBlockScopeCluster extends $dara.Model {
  codeNames?: string[];
  relations?: CreateBlockRequestScopesBlockScopeClusterRelations[];
  static names(): { [key: string]: string } {
    return {
      codeNames: 'CodeNames',
      relations: 'Relations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeNames: { 'type': 'array', 'itemType': 'string' },
      relations: { 'type': 'array', 'itemType': CreateBlockRequestScopesBlockScopeClusterRelations },
    };
  }

  validate() {
    if(Array.isArray(this.codeNames)) {
      $dara.Model.validateArray(this.codeNames);
    }
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

