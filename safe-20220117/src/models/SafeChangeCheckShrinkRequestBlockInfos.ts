// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckShrinkRequestBlockInfosHitInfos } from "./SafeChangeCheckShrinkRequestBlockInfosHitInfos";


export class SafeChangeCheckShrinkRequestBlockInfos extends $dara.Model {
  hitInfos?: SafeChangeCheckShrinkRequestBlockInfosHitInfos[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      hitInfos: 'HitInfos',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitInfos: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestBlockInfosHitInfos },
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

