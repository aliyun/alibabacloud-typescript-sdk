// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @example
   * acl_action,acl_rule_id
   */
  addList?: string;
  /**
   * @example
   * success_finished
   */
  configStatus?: string;
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
   * account,acl_action,acl_rule_id,acl_rule_type
   */
  fieldList?: string;
  /**
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
  /**
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

