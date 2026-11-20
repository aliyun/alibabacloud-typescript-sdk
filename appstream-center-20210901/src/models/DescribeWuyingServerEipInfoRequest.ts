// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerEipInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet service operation provider. Valid values: 
   * - ChinaMobile: shift.
   * - ChinaTelecom: China Telecom.
   * - ChinaUnicom: China Unicom.
   * 
   * @example
   * ChinaTelecom
   */
  isp?: string;
  /**
   * @remarks
   * The workstation ID. You can obtain the ID from the WuyingServerIdList returned after you call the CreateWuyingServer operation to create a workstation, or call the ListWuyingServer operation to query the IDs of existing workstations.
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

