// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @example
   * acl_test,acl_action,acl_rule_id,waf_test,acl_rule_type
   */
  addList?: string;
  /**
   * @example
   * waf_rule_id,waf_rule_type
   */
  delList?: string;
  /**
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * {\\"request_header\\":\\"Ali-Cdn-Real-Ip\\"}
   */
  extendConfig?: string;
  /**
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type,acl_test,antiscan_action,antiscan_rule_id,antiscan_rule_type,antiscan_test,body_bytes_sent,bypass_matched_ids
   */
  fieldList?: string;
  /**
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
  /**
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

