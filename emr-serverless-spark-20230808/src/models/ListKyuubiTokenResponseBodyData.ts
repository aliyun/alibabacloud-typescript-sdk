// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListKyuubiTokenResponseBodyDataTokens } from "./ListKyuubiTokenResponseBodyDataTokens";


export class ListKyuubiTokenResponseBodyData extends $dara.Model {
  tokens?: ListKyuubiTokenResponseBodyDataTokens[];
  static names(): { [key: string]: string } {
    return {
      tokens: 'tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokens: { 'type': 'array', 'itemType': ListKyuubiTokenResponseBodyDataTokens },
    };
  }

  validate() {
    if(Array.isArray(this.tokens)) {
      $dara.Model.validateArray(this.tokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

