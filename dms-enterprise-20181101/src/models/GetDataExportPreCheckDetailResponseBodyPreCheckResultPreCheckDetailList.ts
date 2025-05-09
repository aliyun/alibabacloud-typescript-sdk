// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList } from "./GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList";


export class GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList extends $dara.Model {
  preCheckDetailList?: GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList[];
  static names(): { [key: string]: string } {
    return {
      preCheckDetailList: 'PreCheckDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckDetailList: { 'type': 'array', 'itemType': GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckDetailList)) {
      $dara.Model.validateArray(this.preCheckDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

