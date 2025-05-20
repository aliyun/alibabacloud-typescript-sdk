// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVLExtractionResultResponseBodyDataKvListInfo } from "./GetVlextractionResultResponseBodyDataKvListInfo";


export class GetVLExtractionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Document Parsing Result
   */
  kvListInfo?: GetVLExtractionResultResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': GetVLExtractionResultResponseBodyDataKvListInfo },
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

