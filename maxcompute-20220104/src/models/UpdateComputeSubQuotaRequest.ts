// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateComputeSubQuotaRequestSubQuotaInfoList } from "./UpdateComputeSubQuotaRequestSubQuotaInfoList";


export class UpdateComputeSubQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: UpdateComputeSubQuotaRequestSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subQuotaInfoList: { 'type': 'array', 'itemType': UpdateComputeSubQuotaRequestSubQuotaInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.subQuotaInfoList)) {
      $dara.Model.validateArray(this.subQuotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

