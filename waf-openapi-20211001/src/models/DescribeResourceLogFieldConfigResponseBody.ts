// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of additional log fields configured in addition to the default log fields. The value is in the "a,b,c,..." format.
   * 
   * @example
   * acl_test,acl_action,acl_rule_id,waf_test,acl_rule_type
   */
  addList?: string;
  /**
   * @remarks
   * The list of log fields that are not configured compared to the default log fields. The value is in the "a,b,c,..." format.
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
   * - **kafka**: External delivery to Kafka.
   * - **syslog**: External delivery to Syslog.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The extended configuration for log delivery. The value is a string converted from a JSON object constructed with a series of parameters.
   * > For detailed parameter information, see the description of the **ExtendConfig** parameter in the [ModifyResourceLogFieldConfig](~~ModifyResourceLogFieldConfig~~) operation.
   * 
   * @example
   * {\\"request_header\\":\\"Ali-Cdn-Real-Ip\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * The list of delivered log fields. The value is in the "a,b,c,..." format.
   * 
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type,acl_test,antiscan_action,antiscan_rule_id,antiscan_rule_type,antiscan_test,body_bytes_sent,bypass_matched_ids
   */
  fieldList?: string;
  /**
   * @remarks
   * The log delivery policies. Multiple policies are supported. The value is a string converted from a JSON array constructed with a series of parameters.
   * 
   * > For detailed parameter information, see the description of the **LogDeliveryStrategy** parameter in the [ModifyResourceLogFieldConfig](~~ModifyResourceLogFieldConfig~~) operation.
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

