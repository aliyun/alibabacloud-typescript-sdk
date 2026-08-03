// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID where the SaaS service resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agdb-xxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

