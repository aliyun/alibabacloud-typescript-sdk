// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceInternetAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The region where the instance is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

