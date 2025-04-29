// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchRequestSearchPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13412341234
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  certType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANGSAN
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'cert_no',
      certType: 'cert_type',
      fullName: 'full_name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certType: 'number',
      fullName: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

