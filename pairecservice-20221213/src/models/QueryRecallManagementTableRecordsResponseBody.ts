// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecallManagementTableRecordsResponseBody extends $dara.Model {
  records?: { [key: string]: any }[];
  /**
   * @example
   * 7D59453C-48AA-5FC5-8848-2D373BD1A17F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

