// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the retention period of the classic network endpoint. Unit: days.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: number;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds******
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to retain the classic network endpoint.
   * 
   * @example
   * true
   */
  retainClassic?: boolean;
  /**
   * @remarks
   * The network type of the PolarDB-X 1.0 instance. Valid values:
   * 
   * *   vpc: Virtual Private Cloud (VPC)
   * *   classic: classic network
   * 
   * This parameter is required.
   * 
   * @example
   * classic
   */
  srcInstanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      drdsInstanceId: 'DrdsInstanceId',
      retainClassic: 'RetainClassic',
      srcInstanceNetworkType: 'SrcInstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      drdsInstanceId: 'string',
      retainClassic: 'boolean',
      srcInstanceNetworkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

