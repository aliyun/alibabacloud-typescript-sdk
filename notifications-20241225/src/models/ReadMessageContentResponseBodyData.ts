// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadMessageContentResponseBodyDataDatas } from "./ReadMessageContentResponseBodyDataDatas";


export class ReadMessageContentResponseBodyData extends $dara.Model {
  datas?: ReadMessageContentResponseBodyDataDatas;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: ReadMessageContentResponseBodyDataDatas,
    };
  }

  validate() {
    if(this.datas && typeof (this.datas as any).validate === 'function') {
      (this.datas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

