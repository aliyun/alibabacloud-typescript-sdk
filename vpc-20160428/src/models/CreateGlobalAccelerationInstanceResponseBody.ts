// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalAccelerationInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1fi6sq7npnicmjj****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The public IP address of the GA instance.
   * 
   * If **BandwidthType** is set to **Sharing**, this parameter is not returned.
   * 
   * @example
   * 12.xx.xx.78
   */
  ipAddress?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipAddress: 'IpAddress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstanceId: 'string',
      ipAddress: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

