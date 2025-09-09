// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeHiStoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdssad23sdfc
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the column-oriented storage instance.
   * 
   * This parameter is required.
   * 
   * @example
   * hi-sesex2e
   */
  historeInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      historeInstanceId: 'HistoreInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      historeInstanceId: 'string',
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

