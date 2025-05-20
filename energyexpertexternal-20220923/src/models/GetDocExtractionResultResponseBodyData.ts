// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocExtractionResultResponseBodyDataKvListInfo } from "./GetDocExtractionResultResponseBodyDataKvListInfo";


export class GetDocExtractionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of document parsing results
   */
  kvListInfo?: GetDocExtractionResultResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': GetDocExtractionResultResponseBodyDataKvListInfo },
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

