// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderRequestTravelerInfoList extends $dara.Model {
  /**
   * @example
   * 2000-00-00
   */
  birthday?: string;
  certNation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1262651555151
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  certType?: string;
  /**
   * @example
   * 2000-00-00
   */
  certValidDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * 国籍
   * 
   * @example
   * 中国大陆
   */
  nationality?: string;
  /**
   * @remarks
   * 国籍二字码
   * 
   * @example
   * CN
   */
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  outUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12341231232
   */
  phone?: string;
  /**
   * @example
   * 0
   */
  sex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      name: 'name',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      outUserId: 'out_user_id',
      phone: 'phone',
      sex: 'sex',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'string',
      certValidDate: 'string',
      name: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      outUserId: 'string',
      phone: 'string',
      sex: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

