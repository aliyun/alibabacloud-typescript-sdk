// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiExportRequest extends $dara.Model {
  /**
   * @remarks
   * The hybrid cloud cluster ID.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 993
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zxu3***
   */
  instanceId?: string;
  /**
   * @remarks
   * The extended parameters of the export task. You can filter the exported content by specifying conditions. The value is a JSON string constructed from a series of parameters.
   * > The specific parameters vary depending on the specified **export task type** (**Type**). For more information, refer to **Export task parameter description**.
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
   * The language type. Valid values:
   * 
   * - **cn** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * cn
   */
  region?: string;
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
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the export task. Valid values:
   * 
   * - **apisec_api** (default): API asset task.
   * 
   * - **apisec_abnormal**: API risk task.
   * 
   * - **apisec_event**: API security event task.
   * 
   * @example
   * apisec_api
   */
  type?: string;
  /**
   * @remarks
   * The time zone ID.
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

