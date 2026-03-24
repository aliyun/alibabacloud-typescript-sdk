// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0x***
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The level of the rule.
   * 
   * For threat detection (risk) and security events (event), valid values are:
   * 
   * - **high**: important
   * 
   * - **medium**: medium
   * 
   * - **low**: low
   * 
   * For sensitive data (sensitive_word), valid values are:
   * 
   * - **S1**: S1
   * 
   * - **S2**: S2
   * 
   * - **S3**: S3
   * 
   * - **S4**: S4
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * information leakage
   */
  name?: string;
  /**
   * @remarks
   * The source of the rule. Valid values:
   * 
   * - **custom**: custom
   * 
   * - **default**: built-in
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland
   * 
   * - **ap-southeast-1**: outside the Chinese mainland
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
   * The enabling status of the rule. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - **risk**: threat detection
   * 
   * - **event**: security event
   * 
   * - **sensitive_word**: sensitive data
   * 
   * - **auth_flag**: authentication credential
   * 
   * - **api_tag**: business purpose
   * 
   * - **desensitization**: data masking
   * 
   * - **whitelist**: whitelist
   * 
   * - **recognition**: API
   * 
   * - **offline_api**: lifecycle management
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
      lang: 'Lang',
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
      lang: 'string',
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

