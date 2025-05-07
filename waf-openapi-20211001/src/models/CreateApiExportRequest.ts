// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiExportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * >For hybrid cloud scenarios only, you can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the hybrid cloud clusters.
   * 
   * @example
   * 993
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zxu3***
   */
  instanceId?: string;
  /**
   * @remarks
   * The extended parameters of the data export task. The parameter value is in the JSON format. The following keys are supported:
   * 
   * *   **instanceId**: the instance ID
   * *   **clusterId**: the ID of the hybrid cloud cluster
   * *   **orderKey**: the name of the field used to sort exported data
   * *   **orderWay**: the sorting method of the exported data
   * 
   * @example
   * {
   *     "orderWay": "asc",
   *     "orderKey": "endTs",
   *     "instanceId": "waf_v3prepaid_public_cn-****"
   * }
   */
  param?: string;
  /**
   * @remarks
   * Language type. Valid values:
   * - **cn**: Chinese.
   * - **en**: English.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
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
  /**
   * @remarks
   * The type of the data export task. Valid values:
   * 
   * *   **apisec_api**: API tasks
   * *   **apisec_abnormal**: API risk tasks
   * *   **apisec_event**: API security event tasks
   * 
   * @example
   * apisec_api
   */
  type?: string;
  /**
   * @remarks
   * The ID of the time zone.
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

