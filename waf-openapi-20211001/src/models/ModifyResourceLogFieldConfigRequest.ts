// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceLogFieldConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The log delivery type. Valid values:
   * 
   * - **sls**: Simple Log Service.
   * - **kafka**: external delivery to Kafka logs.
   * - **syslog**: external delivery to Syslog logs.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The log delivery extension configuration. The value is a string converted from a JSON object constructed with a series of parameters.
   * > For more information, see the **Log delivery extension configuration** parameter description.
   * 
   * @example
   * {\\"request_header\\":\\"Ali-Cdn-Real-Ip\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * The list of log fields to deliver. Specify the fields in the "a,b,c,..." format.
   * 
   * >   - All required log fields must be included. You can invoke the [DescribeCommonLogFields](~~DescribeCommonLogFields~~) operation to view the log fields supported by Simple Log Service for WAF. 
   * > - If the log fields include **request_header**, use the **delivery extension configuration** (**ExtendConfig**) parameter to specify the request headers to deliver.
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
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-uax****3k0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The log delivery strategy. Multiple strategies are supported. The value is a string converted from a JSON array constructed with a series of parameters.
   * 
   * > For more information, see the **Log delivery strategy** parameter description.
   * 
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
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
   * The protected object to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * cwaf-***-waf
   */
  resource?: string;
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
      resource: 'Resource',
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
      resource: 'string',
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

