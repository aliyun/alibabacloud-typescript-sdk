// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PbcRelationItem } from "./PbcRelationItem";


export class PbcUpDownstreamResult extends $dara.Model {
  pbcItems?: PbcRelationItem[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pbcItems: 'pbcItems',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbcItems: { 'type': 'array', 'itemType': PbcRelationItem },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pbcItems)) {
      $dara.Model.validateArray(this.pbcItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

