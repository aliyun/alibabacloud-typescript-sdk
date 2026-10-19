// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance identity. You can obtain this value from Items[].InstanceId returned by ListDataMaskingInstances.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target kernel version. You can obtain this value from KernelVersions[].KernelVersion returned by ListMiniEngineVersions.
   * 
   * @example
   * rds_20220731
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If you also specify ProductId, the two values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud product type identifier. Valid values:
   * 
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * 
   * If you specify both ProductId and ProductCode, the values must correspond to each other.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The specified upgrade time. This value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC. Specify this parameter only when UpgradeTime is set to SpecifyTime. The value must be later than the current time.
   * 
   * @example
   * 1893456000000
   */
  switchTime?: number;
  /**
   * @remarks
   * The time at which the kernel upgrade is performed. Valid values:
   * 
   * - Immediate: The upgrade is performed immediately.
   * - MaintainTime: The upgrade is performed during the maintenance window.
   * - SpecifyTime: The upgrade is performed at a specified time.
   * 
   * PolarDB-X 2.0 does not support SpecifyTime.
   * 
   * @example
   * MaintainTime
   */
  upgradeTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      kernelVersion: 'KernelVersion',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      switchTime: 'SwitchTime',
      upgradeTime: 'UpgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      kernelVersion: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
      switchTime: 'number',
      upgradeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

