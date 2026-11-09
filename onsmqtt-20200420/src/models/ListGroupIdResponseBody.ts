// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupIdResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp of the group ID.
   * 
   * @example
   * 1564577317000
   */
  createTime?: number;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * GID_test1
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the instance has an independent namespace. Valid values:
   * 
   * - **true**: The instance has an independent namespace. In this case, resource names must be unique within the instance, but they can be the same as resource names in other instances.
   * 
   * - **false**: The instance does not have an independent namespace. In this case, resource names must be globally unique across all instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the instance to which the group ID belongs.
   * 
   * @example
   * post-cn-45910tj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The tags attached to the group ID.
   */
  tags?: ListGroupIdResponseBodyDataTags[];
  /**
   * @remarks
   * The timestamp of the last update for the group ID.
   * 
   * @example
   * 1564577317000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      tags: { 'type': 'array', 'itemType': ListGroupIdResponseBodyDataTags },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the returned group IDs.
   */
  data?: ListGroupIdResponseBodyData[];
  /**
   * @remarks
   * The unique ID for the request. This is a common parameter.
   * 
   * @example
   * 95996EEB-D894-44FA-A87C-940F5CD9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGroupIdResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

