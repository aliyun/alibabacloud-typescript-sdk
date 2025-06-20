// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMaYiBlockRequestScopeGroupBlockScopeParams } from "./CreateMaYiBlockRequestScopeGroupBlockScopeParams";


export class CreateMaYiBlockRequestScope extends $dara.Model {
  groupBlockScopeParams?: CreateMaYiBlockRequestScopeGroupBlockScopeParams[];
  static names(): { [key: string]: string } {
    return {
      groupBlockScopeParams: 'GroupBlockScopeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBlockScopeParams: { 'type': 'array', 'itemType': CreateMaYiBlockRequestScopeGroupBlockScopeParams },
    };
  }

  validate() {
    if(Array.isArray(this.groupBlockScopeParams)) {
      $dara.Model.validateArray(this.groupBlockScopeParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

