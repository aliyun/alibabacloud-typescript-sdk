// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayDnsForwardsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the SAG instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-v9un1ccz22owd76lf8
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number (SN) of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4dkqh78
   */
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

