// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerEipInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet service operation provider (ISP). Valid values: 
   * - ChinaMobile: Shift.
   * - ChinaTelecom: China Telecom.
   * - ChinaUnicom: China Unicom.
   * 
   * @example
   * ChinaTelecom
   */
  isp?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: 'string',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

