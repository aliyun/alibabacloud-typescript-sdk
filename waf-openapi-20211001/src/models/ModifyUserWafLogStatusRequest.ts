// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserWafLogStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-mp9153****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the log storage region. If this parameter is not specified, Simple Log Service is enabled in the region where the WAF instance resides.
   * 
   * - **cn-hangzhou**: the default region where Simple Log Service is enabled for a WAF instance in the Chinese mainland.
   * 
   * - **ap-southeast-1**: the default region where Simple Log Service is enabled for a WAF instance outside the Chinese mainland.
   * 
   * > Call [DescribeUserSlsLogRegions](https://help.aliyun.com/document_detail/2712598.html) to query the available log storage regions.
   * 
   * @example
   * cn-beijing
   */
  logRegionId?: string;
  /**
   * @remarks
   * Indicates whether Simple Log Service is enabled. Valid values:
   * 
   * - **0**: Simple Log Service is disabled.
   * 
   * - **1**: Simple Log Service is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  logStatus?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      logStatus: 'LogStatus',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logRegionId: 'string',
      logStatus: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

