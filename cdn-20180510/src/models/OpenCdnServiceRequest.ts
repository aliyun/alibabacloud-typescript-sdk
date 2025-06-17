// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenCdnServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The metering method of Alibaba Cloud CDN. A value of **PayByTraffic** indicates that the metering method is pay-by-data-transfer.
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

