// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupIdRequestTag extends $dara.Model {
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

export class ListGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance for which you want to list group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListGroupIdRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': ListGroupIdRequestTag },
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

