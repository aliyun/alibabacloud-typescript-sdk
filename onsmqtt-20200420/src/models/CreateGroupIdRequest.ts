// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupIdRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
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

export class CreateGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID to be created. Valid values:
   * 
   * - The value must start with `GID_` or `GID-` and can contain only letters, digits, hyphens (-), and underscores (_). The value must be 7 to 64 characters in length.
   * - A group ID cannot be modified after it is created. For more information, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance where the group ID resides.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The array of tag key-value pairs.
   */
  tag?: CreateGroupIdRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': CreateGroupIdRequestTag },
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

