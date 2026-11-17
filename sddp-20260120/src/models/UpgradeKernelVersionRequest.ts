// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance identity. You can obtain this value from the Items[].InstanceId field in the ListDataMaskingInstances response.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target Milvus version. You can obtain this value from the KernelVersions[].KernelVersion field in the ListMiniEngineVersions response.
   * 
   * @example
   * rds_20220731
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The language of the response description. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If you specify both ProductCode and ProductId, they must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The product type identifier. Valid values: 5: RDS. 8: POLARDB. 27: PolarDBX2. If you specify both ProductId and ProductCode, they must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The specified upgrade time. The value is a UNIX timestamp in milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Specify this parameter only when UpgradeTime is set to SpecifyTime. The time must be later than the current time.
   * 
   * @example
   * 1893456000000
   */
  switchTime?: number;
  /**
   * @remarks
   * The execution time for the kernel upgrade. Valid values: Immediate: Executes the upgrade immediately. MaintainTime: Executes the upgrade during the maintenance window. SpecifyTime: Executes the upgrade at a specified time. PolarDB-X 2.0 does not support SpecifyTime.
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

