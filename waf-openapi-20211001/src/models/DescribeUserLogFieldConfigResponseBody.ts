// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of log fields that are configured in addition to the default log fields, in the format of "a,b,c,...".
   * 
   * @example
   * acl_action,acl_rule_id
   */
  addList?: string;
  /**
   * @remarks
   * The status of the log field configuration. Valid values:
   * - **initial**: The configuration is in the initialization state.
   * - **updating**: The configuration is being updated.
   * - **failed_finished**: The configuration failed.
   * - **success_finished**: The configuration succeeded.
   * 
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @remarks
   * The list of log fields that are excluded from the default log fields, in the format of "a,b,c,...".
   * 
   * @example
   * waf_rule_id,waf_rule_type
   */
  delList?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * 
   * - **sls**: Simple Log Service.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The extended configuration for log delivery. The value is a string converted from a JSON object constructed with a series of parameters.
   * > For more information about the parameters, see the **ExtendConfig** parameter description in the [ModifyUserLogFieldConfig](~~ModifyUserLogFieldConfig~~) operation.
   * 
   * @example
   * {\\"request_header\\":\\"Ali-Cdn-Real-Ip\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * The list of log fields to be delivered, in the format of "a,b,c,...".
   * 
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type
   */
  fieldList?: string;
  /**
   * @remarks
   * The log delivery strategy. Multiple strategies are supported. The value is a string converted from a JSON array constructed with a series of parameters.
   * 
   * > For more information about the parameters, see the **LogDeliveryStrategy** parameter description in the [ModifyUserLogFieldConfig](~~ModifyUserLogFieldConfig~~) operation.
   * 
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
  /**
   * @remarks
   * The request ID.
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

