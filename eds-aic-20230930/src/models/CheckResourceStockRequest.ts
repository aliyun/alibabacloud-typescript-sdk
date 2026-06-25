// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceStockRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance type.
   * 
   * @example
   * acp.basic.small
   */
  acpSpecId?: string;
  /**
   * @remarks
   * The number of Cloud Phone instances.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable GPU acceleration.
   * 
   * @example
   * false
   */
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * The zone where the resource resides.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acpSpecId: 'AcpSpecId',
      amount: 'Amount',
      bizRegionId: 'BizRegionId',
      gpuAcceleration: 'GpuAcceleration',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acpSpecId: 'string',
      amount: 'number',
      bizRegionId: 'string',
      gpuAcceleration: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

