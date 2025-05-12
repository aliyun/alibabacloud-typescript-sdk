// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModificationPriceRequestResourceSpecs } from "./DescribeModificationPriceRequestResourceSpecs";


export class DescribeModificationPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum public bandwidth. Unit: Mbit/s.
   * 
   * >  Valid values when PayByTraffic is set to PayByBandwidth: 10 to 1000.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of either the monthly subscription cloud computer with unlimited hours or the premium bandwidth plan.
   * 
   * @example
   * ecd-0gfv2z3sf95zvt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The specifications.
   * 
   * *   Valid values when you set `ResourceType` to `Desktop`:
   * 
   *     *   ecd.basic.small
   *     *   ecd.basic.large
   *     *   ecd.advanced.large
   *     *   ecd.advanced.xlarge
   *     *   ecd.performance.2xlarge
   *     *   ecd.graphics.xlarge
   *     *   ecd.graphics.2xlarge
   *     *   ecd.advanced.xlarge_s8d2
   *     *   ecd.advanced.xlarge_s8d7
   *     *   ecd.graphics.1g72c
   *     *   eds.general.2c2g
   *     *   eds.general.2c4g
   *     *   eds.general.2c8g
   *     *   eds.general.4c8g
   *     *   eds.general.4c16g
   *     *   eds.general.8c16g
   *     *   eds.general.8c32g
   *     *   eds.general.16c32g
   * 
   * *   You can skip this parameter if `ResourceType` is set to `NetworkPackage`.
   * 
   * @example
   * eds.enterprise_office.8c16g
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  resourceSpecs?: DescribeModificationPriceRequestResourceSpecs[];
  /**
   * @remarks
   * The resource type. The required parameters depend on the resource type.
   * 
   * *   When `ResourceType` is set to `Desktop`, the required parameters are `InstanceType`, `RootDiskSizeGib`, and `UserDiskSizeGib`.
   * *   When `ResourceType` is set to `NetworkPackage`, the required parameter is `Bandwidth`.
   * 
   * Valid values:
   * 
   * *   Desktop (default): cloud computers.
   * *   NetworkPackage: premium bandwidth plans.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 50
   */
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceSpecs: 'ResourceSpecs',
      resourceType: 'ResourceType',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceSpecs: { 'type': 'array', 'itemType': DescribeModificationPriceRequestResourceSpecs },
      resourceType: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceSpecs)) {
      $dara.Model.validateArray(this.resourceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

