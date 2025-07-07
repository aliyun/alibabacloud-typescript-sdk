// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLivyComputeTokenResponseBodyDataTokens } from "./ListLivyComputeTokenResponseBodyDataTokens";


export class ListLivyComputeTokenResponseBodyData extends $dara.Model {
  tokens?: ListLivyComputeTokenResponseBodyDataTokens[];
  static names(): { [key: string]: string } {
    return {
      tokens: 'tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokens: { 'type': 'array', 'itemType': ListLivyComputeTokenResponseBodyDataTokens },
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

