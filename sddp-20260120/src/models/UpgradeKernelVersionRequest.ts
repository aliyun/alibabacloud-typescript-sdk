// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeKernelVersionRequest extends $dara.Model {
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * rds_20220731
   */
  kernelVersion?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * 1893456000000
   */
  switchTime?: number;
  /**
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

