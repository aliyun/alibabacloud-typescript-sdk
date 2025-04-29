// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAppRequestTag } from "./DeleteAppRequestTag";


export class DeleteAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 110840611
   */
  appId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are allowed.
   * 
   * @example
   * test2
   */
  tag?: DeleteAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DeleteAppRequestTag },
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

