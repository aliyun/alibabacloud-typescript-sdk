// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserLogFieldConfigRequest extends $dara.Model {
  /**
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * {\\"request_header\\":\\"App-Id,channelCode\\"}
   */
  extendConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account,acl_action,acl_rule_id,acl_rule_type,acl_test,antiscan_action,antiscan_rule_id,antiscan_rule_type,antiscan_test,body_bytes_sent,bypass_matched_ids
   */
  fieldList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-fou****
   */
  instanceId?: string;
  /**
   * @example
   * [{\\"logType\\":\\"blockLog\\",\\"rate\\":100},{\\"logType\\":\\"normalRequestLog\\",\\"rate\\":100},{\\"logType\\":\\"checkLog\\",\\"rate\\":100}]
   */
  logDeliveryStrategy?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

