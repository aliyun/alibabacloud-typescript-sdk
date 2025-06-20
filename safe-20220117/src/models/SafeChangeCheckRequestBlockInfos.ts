// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestBlockInfosHitInfos } from "./SafeChangeCheckRequestBlockInfosHitInfos";


export class SafeChangeCheckRequestBlockInfos extends $dara.Model {
  hitInfos?: SafeChangeCheckRequestBlockInfosHitInfos[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      hitInfos: 'HitInfos',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitInfos: { 'type': 'array', 'itemType': SafeChangeCheckRequestBlockInfosHitInfos },
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

