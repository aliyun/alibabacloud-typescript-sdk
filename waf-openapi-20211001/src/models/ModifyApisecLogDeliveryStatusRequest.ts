// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecLogDeliveryStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the API security log delivery. Valid values:
   * 
   * - **risk**: threat information.
   * 
   * - **event**: attack event information.
   * 
   * - **asset**: asset information.
   * 
   * This parameter is required.
   * 
   * @example
   * risk
   */
  assertKey?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance resides. Valid values:
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
  /**
   * @remarks
   * Indicates whether the API security log subscription is enabled. Valid values:
   * 
   * - **true**: The API security log subscription is enabled.
   * 
   * - **false**: The API security log subscription is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

