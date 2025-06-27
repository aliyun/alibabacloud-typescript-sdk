// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNisNetworkRankingResponseBodyData } from "./GetNisNetworkRankingResponseBodyData";


export class GetNisNetworkRankingResponseBody extends $dara.Model {
  data?: GetNisNetworkRankingResponseBodyData[];
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetNisNetworkRankingResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

