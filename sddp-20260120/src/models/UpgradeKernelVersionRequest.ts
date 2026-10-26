// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance identity. You can obtain the value from Items[].InstanceId in the response of the ListDataMaskingInstances operation.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target Milvus version. You can obtain the value from KernelVersions[].KernelVersion in the response of the ListMiniEngineVersions operation.
   * 
   * @example
   * rds_20220731
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two values must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The identifier of the cloud service type. Valid values:
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * If this parameter is specified together with ProductCode, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The specified upgrade time. The value is a UNIX timestamp in milliseconds that have elapsed since 1970-01-01 00:00:00 UTC. Specify this parameter only when UpgradeTime is set to SpecifyTime, and the time must be later than the current time.
   * 
   * @example
   * 1893456000000
   */
  switchTime?: number;
  /**
   * @remarks
   * The execution time of the kernel upgrade. Valid values:
   * - Immediate: Executes the upgrade immediately.
   * - MaintainTime: Executes the upgrade during the maintenance window.
   * - SpecifyTime: Executes the upgrade at a specified time.
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

