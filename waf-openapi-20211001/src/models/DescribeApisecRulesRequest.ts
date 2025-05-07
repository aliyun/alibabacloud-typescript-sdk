// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0x***
   */
  instanceId?: string;
  /**
   * @remarks
   * The level of the policy.
   * 
   * If Type is set to risk or event, you can set this parameter to one of the following values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * If Type is set to sensitive_word, you can set this parameter to one of the following values:
   * 
   * *   **S1**
   * *   **S2**
   * *   **S3**
   * *   **S4**
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * Information Leak
   */
  name?: string;
  /**
   * @remarks
   * The source of the policy. Valid values:
   * 
   * *   **custom**
   * *   **default**
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
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
   * The status of the policy. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **risk**: risk detection
   * *   **event**: security event
   * *   **sensitive_word**: sensitive data
   * *   **auth_flag**: authentication credential
   * *   **api_tag**: business purpose
   * *   **desensitization**: masking
   * *   **whitelist**: whitelist
   * *   **recognition**: API recognition
   * *   **offline_api**: lifecycle management
   * 
   * This parameter is required.
   * 
   * @example
   * risk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      level: 'Level',
      name: 'Name',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      level: 'string',
      name: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

