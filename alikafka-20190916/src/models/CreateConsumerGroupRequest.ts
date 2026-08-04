// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - The tag key cannot be empty.
   * 
   * - The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`.
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
   * 
   * - The tag value can be empty.
   * 
   * - The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`.
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
   * The consumer group name.
   * - Reserved instances:
   * Can contain letters, digits, underscores (_), hyphens (-), and periods (.). The value must be 3 to 64 characters in length.
   * - Serverless instances:
   * Can contain only letters, digits, and special characters "@._*$#^!&-". The value must be 1 to 249 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  consumerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The tags.
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

