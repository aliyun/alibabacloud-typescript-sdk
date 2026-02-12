// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsGroupListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is attached to the consumer group. This parameter is not required. If you configure this parameter, you must configure the **Key** parameter.**** If you configure both the Key and Value parameters, the consumer groups are filtered based on the specified tag. If you do not configure these parameters, all consumer groups are queried.
   * 
   * *   The value of this parameter cannot be an empty string.
   * *   The tag value must be 1 to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is attached to the group. This parameter is not required. If you configure this parameter, you must configure the **Key** parameter.**** If you configure both the Key and Value parameters, the consumer groups are filtered based on the specified tag. If you do not configure these parameters, all consumer groups are queried.
   * 
   * *   The value of this parameter can be an empty string.
   * *   The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * ServiceA
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only when you query specific consumer groups by using the fuzzy search method. If this parameter is not configured, the system queries all consumer groups that can be accessed by the current account.
   * 
   * If you set this parameter to GID_ABC, the information about the consumer groups whose IDs contain GID_ABC is returned. For example, the information about the GID_test_GID_ABC_123 and GID_ABC_356 consumer groups is returned.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The protocol over which the queried consumer group publishes and subscribes to messages. All clients in a consumer group communicate with the ApsaraMQ for RocketMQ broker over the same protocol. You must create different consumer groups for TCP clients and HTTP clients. Valid values:
   * 
   * *   **tcp**: specifies that the consumer group publishes or subscribes to messages over TCP. This value is the default value.
   * *   **http**: specifies that the consumer group publishes or subscribes to messages over HTTP.
   * 
   * @example
   * tcp
   */
  groupType?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of tags that are attached to the consumer group. A maximum of 20 tags can be included in the list.
   */
  tag?: OnsGroupListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupType: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': OnsGroupListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

