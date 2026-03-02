// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Settled } from "./Settled";


export class SettledPageResult extends $dara.Model {
  requestId?: string;
  settleds?: Settled[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      settleds: 'settleds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      settleds: { 'type': 'array', 'itemType': Settled },
    };
  }

  validate() {
    if(Array.isArray(this.settleds)) {
      $dara.Model.validateArray(this.settleds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

