// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiGroupInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
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

export class ModifyApiGroupInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 01c97ed08a614118849b00079753d1e2
   */
  groupId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * migrate
   */
  remark?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   */
  tag?: ModifyApiGroupInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the instance to which you want to migrate the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-bj-c325375b1ebe
   */
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      remark: 'Remark',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      remark: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': ModifyApiGroupInstanceRequestTag },
      targetInstanceId: 'string',
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

