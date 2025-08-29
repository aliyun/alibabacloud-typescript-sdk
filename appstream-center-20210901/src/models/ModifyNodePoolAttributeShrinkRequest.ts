// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The auto scaling policy used by the delivery group.
   */
  nodePoolStrategyShrink?: string;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  poolId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      nodeCapacity: 'NodeCapacity',
      nodePoolStrategyShrink: 'NodePoolStrategy',
      poolId: 'PoolId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      nodeCapacity: 'number',
      nodePoolStrategyShrink: 'string',
      poolId: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

