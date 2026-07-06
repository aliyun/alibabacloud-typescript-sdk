// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateConsumerGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - N ranges from 1 to 20.
   * - Cannot be empty.
   * - Supports up to 128 characters, cannot start with aliyun or acs:, and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * - N ranges from 1 to 20.
   * - Can be empty.
   * - Supports up to 128 characters, cannot start with aliyun or acs:, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Group name.
   * 
   * - Reserved instance: Supports uppercase and lowercase letters, numbers, underscores (_), hyphens (-), and periods (.), limited to 3-64 characters.
   * - Serverless instance: Can only contain letters, numbers, and special characters "@._\\*$#^!&-", limited to 1-249 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  consumerId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z8****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * Tag list.
   */
  tag?: CreateConsumerGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      tag: { 'type': 'array', 'itemType': CreateConsumerGroupRequestTag },
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

