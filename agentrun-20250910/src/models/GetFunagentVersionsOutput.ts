// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunagentVersionItem } from "./FunagentVersionItem";


export class GetFunagentVersionsOutput extends $dara.Model {
  items?: FunagentVersionItem[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FunagentVersionItem },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

