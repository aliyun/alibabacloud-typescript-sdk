// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserUpdateRequestCertRequestList extends $dara.Model {
  /**
   * @example
   * 2034-10-01
   */
  certExpiredTime?: string;
  /**
   * @example
   * CN
   */
  certNation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 330101199010010213
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
   * @example
   * CN
   */
  nationality?: string;
  static names(): { [key: string]: string } {
    return {
      certExpiredTime: 'cert_expired_time',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      nationality: 'nationality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpiredTime: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      nationality: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

