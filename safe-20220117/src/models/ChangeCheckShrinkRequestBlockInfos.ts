// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckShrinkRequestBlockInfosHitInfos } from "./ChangeCheckShrinkRequestBlockInfosHitInfos";


export class ChangeCheckShrinkRequestBlockInfos extends $dara.Model {
  hitInfos?: ChangeCheckShrinkRequestBlockInfosHitInfos[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      hitInfos: 'HitInfos',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitInfos: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestBlockInfosHitInfos },
      id: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hitInfos)) {
      $dara.Model.validateArray(this.hitInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

