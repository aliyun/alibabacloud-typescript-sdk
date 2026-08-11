// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelBatchGetHotelDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The language (such as en or zh).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The list of standard hotel IDs. A maximum of 100 IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ["H001","H002"]
   */
  standardHotelIds?: string[];
  /**
   * @remarks
   * string
   * 
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      language: 'Language',
      standardHotelIds: 'StandardHotelIds',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      language: 'string',
      standardHotelIds: { 'type': 'array', 'itemType': 'string' },
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.standardHotelIds)) {
      $dara.Model.validateArray(this.standardHotelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

