// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentPropetiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * learn_EasDedicatedPrepay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-xxxxx
   */
  componentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      componentName: 'ComponentName',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      componentName: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

