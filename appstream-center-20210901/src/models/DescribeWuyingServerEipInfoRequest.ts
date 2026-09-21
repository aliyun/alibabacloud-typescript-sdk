// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerEipInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet service operation provider. Valid values: 
   * - ChinaMobile: China Shift.
   * - ChinaTelecom: China Telecom.
   * - ChinaUnicom: China Unicom.
   * 
   * @example
   * ChinaTelecom
   */
  isp?: string;
  /**
   * @remarks
   * The workspace ID. You can obtain this ID from the WuyingServerIdList returned by CreateWuyingServer after creating a workspace, or query the ID of an existing workspace by calling ListWuyingServer.
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

