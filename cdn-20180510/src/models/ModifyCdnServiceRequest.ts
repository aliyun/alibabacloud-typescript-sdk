// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdnServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The new metering method for Alibaba Cloud CDN. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayByBandwidth**: pay-by-bandwidth
   * 
   * This parameter is required.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

