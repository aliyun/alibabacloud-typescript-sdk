// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertAiOutboundPhoneNumsResponseBodyDataFailInfo } from "./InsertAiOutboundPhoneNumsResponseBodyDataFailInfo";


export class InsertAiOutboundPhoneNumsResponseBodyData extends $dara.Model {
  failInfo?: InsertAiOutboundPhoneNumsResponseBodyDataFailInfo[];
  /**
   * @example
   * 7
   */
  successCount?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failInfo: 'FailInfo',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfo: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsResponseBodyDataFailInfo },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failInfo)) {
      $dara.Model.validateArray(this.failInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

