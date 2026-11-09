// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0x***
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the returned rules. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The level of the rule.
   * 
   * For risk detection (risk) and security events (event), valid values:
   * - **high**: High risk.
   * - **medium**: Medium risk.
   * - **low**: Low risk.
   * 
   * For sensitive data (sensitive_word), valid values:
   * - **S1**: S1 level.
   * - **S2**: S2 level.
   * - **S3**: S3 level.
   * - **S4**: S4 level.
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
   * - **custom**: Custom.
   * - **default**: Built-in.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The page number to return in a paged query. Default value: **1**, which indicates the first page of paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. Default value: **10**, which indicates 10 entries per paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The enabling status of the rule. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: shutdown.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **risk**: Risk detection.
   * - **event**: Security events.
   * - **sensitive_word**: Sensitive data.
   * - **auth_flag**: Authentication credentials.
   * - **api_tag**: Business purpose.
   * - **desensitization**: Data masking.
   * - **whitelist**: Whitelist.
   * - **recognition**: API identification.
   * - **offline_api**: Lifecycle management.
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

