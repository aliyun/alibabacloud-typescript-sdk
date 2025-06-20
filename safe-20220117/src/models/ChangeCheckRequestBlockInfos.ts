// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckRequestBlockInfosHitInfos } from "./ChangeCheckRequestBlockInfosHitInfos";


export class ChangeCheckRequestBlockInfos extends $dara.Model {
  hitInfos?: ChangeCheckRequestBlockInfosHitInfos[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      hitInfos: 'HitInfos',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitInfos: { 'type': 'array', 'itemType': ChangeCheckRequestBlockInfosHitInfos },
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

