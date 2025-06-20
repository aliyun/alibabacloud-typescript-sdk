// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBlockRequestScopesBlockScopeCustomerRelations } from "./CreateBlockRequestScopesBlockScopeCustomerRelations";


export class CreateBlockRequestScopesBlockScopeCustomer extends $dara.Model {
  codeNames?: string[];
  relations?: CreateBlockRequestScopesBlockScopeCustomerRelations[];
  uid?: string;
  viewCodes?: number[];
  static names(): { [key: string]: string } {
    return {
      codeNames: 'CodeNames',
      relations: 'Relations',
      uid: 'Uid',
      viewCodes: 'ViewCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeNames: { 'type': 'array', 'itemType': 'string' },
      relations: { 'type': 'array', 'itemType': CreateBlockRequestScopesBlockScopeCustomerRelations },
      uid: 'string',
      viewCodes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.codeNames)) {
      $dara.Model.validateArray(this.codeNames);
    }
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
    }
    if(Array.isArray(this.viewCodes)) {
      $dara.Model.validateArray(this.viewCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

