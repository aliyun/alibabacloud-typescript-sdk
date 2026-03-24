// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiExportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter is applicable only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud clusters.
   * 
   * @example
   * 993
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zxu3***
   */
  instanceId?: string;
  /**
   * @remarks
   * The filter conditions for the export task. The value is a JSON string.
   * 
   * > The filter conditions vary based on the export task type specified by **Type**. For more information, see **Export task parameters**.
   * 
   * @example
   * {
   *     "startTime": 1741449600,
   *     "endTime": 1744079820,
   *     "sensitiveLevel": "L1"
   * }
   */
  param?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **cn** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * - **cn-hangzhou**: Chinese mainland.
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
   * The type of the export task. Valid values:
   * 
   * - **apisec_api** (default): Exports API asset data.
   * 
   * - **apisec_abnormal**: Exports API threat data.
   * 
   * - **apisec_event**: Exports API security event data.
   * 
   * @example
   * apisec_api
   */
  type?: string;
  /**
   * @remarks
   * The time zone of the export data, such as **Asia/Shanghai**.
   * 
   * @example
   * Asia/Shanghai
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      param: 'Param',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      param: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      type: 'string',
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

