// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceStockRequest extends $dara.Model {
  /**
   * @remarks
   * The specification ID.
   * 
   * @example
   * acp.basic.small
   */
  acpSpecId?: string;
  /**
   * @remarks
   * The number of cloud phone instances.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The region ID.
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
   * The zone to which the resource belongs.
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

