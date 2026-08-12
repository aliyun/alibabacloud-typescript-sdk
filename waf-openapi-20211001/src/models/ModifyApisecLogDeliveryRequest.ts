// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The log subscription type. Valid values:
   * 
   * - **risk**: risk information.
   * - **event**: attack event information.
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
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3_public_cn-uqm2z****0a
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID for log storage.
   * 
   * > You can call the [DescribeUserSlsLogRegions](https://help.aliyun.com/document_detail/2712598.html) operation to query available log storage regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * > You can call the [DescribeApisecSlsLogStores](https://help.aliyun.com/document_detail/2932935.html) operation to query available Logstores.
   * 
   * This parameter is required.
   * 
   * @example
   * apisec-logstore***
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * > You can call the [DescribeApisecSlsProjects](https://help.aliyun.com/document_detail/2932936.html) operation to query available projects.
   * 
   * This parameter is required.
   * 
   * @example
   * apisec-project-14316572********
   */
  projectName?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      instanceId: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      projectName: 'string',
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

