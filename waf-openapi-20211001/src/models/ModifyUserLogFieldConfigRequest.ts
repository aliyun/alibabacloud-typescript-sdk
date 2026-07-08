// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserLogFieldConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery type. Valid value:
   * 
   * - **sls**: Simple Log Service.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The extended configuration for log delivery, in JSON format.
   * 
   * > For more information, see the description of the **ExtendConfig** parameter.
   * 
   * @example
   * {\\"request_header\\":\\"App-Id,channelCode\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * The list of log fields to deliver. Use the \\`a,b,c,...\\` format.
   * 
   * > - You must include all required log fields. Call the [DescribeCommonLogFields](~~DescribeCommonLogFields~~) operation to view the log fields that WAF supports.
   * >
   * > - If the log fields include **request_header**, use the **ExtendConfig** parameter to specify the request headers to deliver.
   * 
   * This parameter is required.
   * 
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type,acl_test,antiscan_action,antiscan_rule_id,antiscan_rule_type,antiscan_test,body_bytes_sent,bypass_matched_ids
   */
  fieldList?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to view the ID of your WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-fou****
   */
  instanceId?: string;
  /**
   * @remarks
   * The log delivery strategy, in JSON array format. You can specify multiple strategies.
   * 
   * > For more information, see the description of the **LogDeliveryStrategy** parameter.
   * 
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryType: 'DeliveryType',
      extendConfig: 'ExtendConfig',
      fieldList: 'FieldList',
      instanceId: 'InstanceId',
      logDeliveryStrategy: 'LogDeliveryStrategy',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryType: 'string',
      extendConfig: 'string',
      fieldList: 'string',
      instanceId: 'string',
      logDeliveryStrategy: 'string',
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

