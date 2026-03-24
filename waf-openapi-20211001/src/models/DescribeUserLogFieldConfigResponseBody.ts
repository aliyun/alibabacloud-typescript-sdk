// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The additional log fields that are added to the default configuration. Multiple fields are separated by commas (,) in the `a,b,c,...` format.
   * 
   * @example
   * acl_action,acl_rule_id
   */
  addList?: string;
  /**
   * @remarks
   * The status of the log field configuration. Valid values:
   * 
   * - **initial**: The log field configuration is being initialized.
   * 
   * - **updating**: The log field configuration is being updated.
   * 
   * - **failed_finished**: The log field configuration update failed.
   * 
   * - **success_finished**: The log field configuration update succeeded.
   * 
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @remarks
   * The default log fields that are excluded from the log delivery configuration. Multiple fields are separated by commas (,) in the `a,b,c,...` format.
   * 
   * @example
   * waf_rule_id,waf_rule_type
   */
  delList?: string;
  /**
   * @remarks
   * The log delivery type. Valid values:
   * 
   * - **sls**: Simple Log Service.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The extended configuration for log delivery. The value is a JSON-formatted string that contains configuration key-value pairs, such as custom request headers.
   * 
   * > For more information, see the **ExtendConfig** parameter description in [ModifyUserLogFieldConfig](~~ModifyUserLogFieldConfig~~).
   * 
   * @example
   * {\\"request_header\\":\\"Ali-Cdn-Real-Ip\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * The complete list of log fields that are delivered. Multiple fields are separated by commas (,) in the `a,b,c,...` format.
   * 
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type
   */
  fieldList?: string;
  /**
   * @remarks
   * The log delivery policies. Multiple policies are supported. The value is a JSON-formatted string that contains an array of policy objects.
   * 
   * > For more information, see the **LogDeliveryStrategy** parameter description in [ModifyUserLogFieldConfig](~~ModifyUserLogFieldConfig~~).
   * 
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 653778B4-4D47-5223-855B-4E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
      configStatus: 'ConfigStatus',
      delList: 'DelList',
      deliveryType: 'DeliveryType',
      extendConfig: 'ExtendConfig',
      fieldList: 'FieldList',
      logDeliveryStrategy: 'LogDeliveryStrategy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: 'string',
      configStatus: 'string',
      delList: 'string',
      deliveryType: 'string',
      extendConfig: 'string',
      fieldList: 'string',
      logDeliveryStrategy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

