// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeVlRealtimeResponseBodyDataKvListInfo } from "./AnalyzeVlRealtimeResponseBodyDataKvListInfo";


export class AnalyzeVlRealtimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Document parsing result details
   */
  kvListInfo?: AnalyzeVlRealtimeResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': AnalyzeVlRealtimeResponseBodyDataKvListInfo },
    };
  }

  validate() {
    if(Array.isArray(this.kvListInfo)) {
      $dara.Model.validateArray(this.kvListInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

