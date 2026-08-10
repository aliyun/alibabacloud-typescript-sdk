// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitAiAppScanRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * bailian
   */
  channel?: string;
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      commodityCode: 'CommodityCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
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

