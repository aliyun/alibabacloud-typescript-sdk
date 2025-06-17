// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnConditionIPBInfoResponseBodyDatas } from "./DescribeCdnConditionIpbinfoResponseBodyDatas";


export class DescribeCdnConditionIPBInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data that is returned.
   */
  datas?: DescribeCdnConditionIPBInfoResponseBodyDatas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C4AA72D-8C00-1113-BD68-8BC4E3CF4FF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: { 'type': 'array', 'itemType': DescribeCdnConditionIPBInfoResponseBodyDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datas)) {
      $dara.Model.validateArray(this.datas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

