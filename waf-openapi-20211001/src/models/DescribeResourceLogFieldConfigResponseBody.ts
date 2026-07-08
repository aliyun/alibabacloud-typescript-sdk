// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The extra log fields that are configured in addition to the default log fields. The fields are specified as a string of comma-separated values.
   * 
   * @example
   * acl_test,acl_action,acl_rule_id,waf_test,acl_rule_type
   */
  addList?: string;
  /**
   * @remarks
   * The log fields that are removed from the default log fields. The fields are specified as a string of comma-separated values.
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
   * - **kafka**: Kafka.
   * 
   * - **syslog**: Syslog.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The extended configuration for log delivery. The value is a string that is converted from a JSON object of parameters.
   * 
   * > For more information about the parameters, see the description of the **ExtendConfig** parameter in [ModifyResourceLogFieldConfig](~~ModifyResourceLogFieldConfig~~).
   * 
   * @example
   * {\\"request_header\\":\\"Ali-Cdn-Real-Ip\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * The list of delivered log fields. The fields are specified as a string of comma-separated values.
   * 
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type,acl_test,antiscan_action,antiscan_rule_id,antiscan_rule_type,antiscan_test,body_bytes_sent,bypass_matched_ids
   */
  fieldList?: string;
  /**
   * @remarks
   * The log delivery policies. Multiple policies are supported. The value is a string that is converted from a JSON array of parameters.
   * 
   * > For more information about the parameters, see the description of the **LogDeliveryStrategy** parameter in [ModifyResourceLogFieldConfig](~~ModifyResourceLogFieldConfig~~).
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
   * 7B53B47C-D368-5344-BB5E-79******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
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

