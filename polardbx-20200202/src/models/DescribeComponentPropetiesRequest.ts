// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentPropetiesRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * This parameter is required.
   * 
   * @example
   * learn_EasDedicatedPrepay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-xxxxx
   */
  componentName?: string;
  /**
   * @remarks
   * The region in which the instance resides. > You can call the [describeregions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_auto
   */
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

