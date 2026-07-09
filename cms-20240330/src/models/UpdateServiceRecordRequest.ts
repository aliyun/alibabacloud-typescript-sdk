// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The entry content in JSON string format. The format varies depending on the recordType value.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "project": "proj-xtrace-16c988dcfe21fcb73c5e6f234927d998-cn-hangzhou",
   *   "storeName": "app-biz-log",
   *   "regionId": "cn-hangzhou",
   *   "bindType": "logstore",
   *   "traceIdRelateField": ""
   * }
   */
  recordContent?: string;
  /**
   * @remarks
   * The type of the linked entry. Currently supported value:
   * logCorrelation, which indicates application log association.
   * 
   * This parameter is required.
   * 
   * @example
   * logCorrelation
   */
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      recordContent: 'recordContent',
      recordType: 'recordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContent: 'string',
      recordType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

