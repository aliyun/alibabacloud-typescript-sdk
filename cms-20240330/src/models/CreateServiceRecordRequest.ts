// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the entry. The value is a JSON string. The format varies based on the recordType.
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
   * The type of the association entry. Valid values:
   * - logCorrelation: Application log association.
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

