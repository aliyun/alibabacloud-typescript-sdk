// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmAiAppScanRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the region where the application resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
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

