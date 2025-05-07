// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudServerRequest extends $dara.Model {
  /**
   * @remarks
   * The continent.
   * 
   * This parameter is required.
   * 
   * @example
   * asiapacific
   */
  continents?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  customName?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * b1bf3f544f30c1de0b72d91290**ccb
   */
  mid?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  operator?: string;
  /**
   * @remarks
   * The city.
   * 
   * This parameter is required.
   * 
   * @example
   * beijing
   */
  regionCode?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      continents: 'Continents',
      customName: 'CustomName',
      instanceId: 'InstanceId',
      mid: 'Mid',
      operator: 'Operator',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continents: 'string',
      customName: 'string',
      instanceId: 'string',
      mid: 'string',
      operator: 'string',
      regionCode: 'string',
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

