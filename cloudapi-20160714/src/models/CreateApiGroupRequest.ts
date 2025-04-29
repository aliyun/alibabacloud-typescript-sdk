// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApiGroupRequestTag } from "./CreateApiGroupRequestTag";


export class CreateApiGroupRequest extends $dara.Model {
  /**
   * @example
   * /qqq
   */
  basePath?: string;
  /**
   * @example
   * The weather informations.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Weather
   */
  groupName?: string;
  /**
   * @example
   * apigateway-cn-v6419k43xxxxx
   */
  instanceId?: string;
  securityToken?: string;
  /**
   * @example
   * Key， Value
   */
  tag?: CreateApiGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateApiGroupRequestTag },
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

