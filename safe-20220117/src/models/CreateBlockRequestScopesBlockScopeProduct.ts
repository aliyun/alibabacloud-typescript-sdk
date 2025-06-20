// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBlockRequestScopesBlockScopeProductRelations } from "./CreateBlockRequestScopesBlockScopeProductRelations";


export class CreateBlockRequestScopesBlockScopeProduct extends $dara.Model {
  codeNames?: string[];
  key?: string;
  relations?: CreateBlockRequestScopesBlockScopeProductRelations[];
  viewCode?: string[];
  static names(): { [key: string]: string } {
    return {
      codeNames: 'CodeNames',
      key: 'Key',
      relations: 'Relations',
      viewCode: 'ViewCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeNames: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      relations: { 'type': 'array', 'itemType': CreateBlockRequestScopesBlockScopeProductRelations },
      viewCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.codeNames)) {
      $dara.Model.validateArray(this.codeNames);
    }
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
    }
    if(Array.isArray(this.viewCode)) {
      $dara.Model.validateArray(this.viewCode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

