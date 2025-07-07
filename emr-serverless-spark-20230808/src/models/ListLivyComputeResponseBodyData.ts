// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLivyComputeResponseBodyDataLivyComputes } from "./ListLivyComputeResponseBodyDataLivyComputes";


export class ListLivyComputeResponseBodyData extends $dara.Model {
  livyComputes?: ListLivyComputeResponseBodyDataLivyComputes[];
  static names(): { [key: string]: string } {
    return {
      livyComputes: 'livyComputes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livyComputes: { 'type': 'array', 'itemType': ListLivyComputeResponseBodyDataLivyComputes },
    };
  }

  validate() {
    if(Array.isArray(this.livyComputes)) {
      $dara.Model.validateArray(this.livyComputes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

