// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppSecurityRequestTag } from "./DescribeAppSecurityRequestTag";


export class DescribeAppSecurityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * This parameter is required.
   * 
   * @example
   * 20112314518278
   */
  appId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: DescribeAppSecurityRequestTag[];
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
      tag: { 'type': 'array', 'itemType': DescribeAppSecurityRequestTag },
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

