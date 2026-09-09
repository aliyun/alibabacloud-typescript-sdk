// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAmountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliyunUidList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUidList: 'aliyunUidList',
      endDate: 'endDate',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUidList: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      startDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunUidList)) {
      $dara.Model.validateArray(this.aliyunUidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

