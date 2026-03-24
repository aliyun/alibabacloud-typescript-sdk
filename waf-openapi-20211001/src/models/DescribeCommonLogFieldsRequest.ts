// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonLogFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-l*****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to query for default log fields.
   * 
   * - **true**: Queries for default log fields.
   * 
   * - **false**: Queries for non-default log fields.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Specifies whether to query for required log fields.
   * 
   * - **true**: Queries for required log fields.
   * 
   * - **false**: Queries for non-required log fields.
   * 
   * @example
   * false
   */
  isRequired?: boolean;
  /**
   * @remarks
   * The list of log fields to query.
   */
  logKeyList?: string[];
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
   * rg-aek2sxgs*****
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isDefault: 'IsDefault',
      isRequired: 'IsRequired',
      logKeyList: 'LogKeyList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isDefault: 'boolean',
      isRequired: 'boolean',
      logKeyList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logKeyList)) {
      $dara.Model.validateArray(this.logKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

