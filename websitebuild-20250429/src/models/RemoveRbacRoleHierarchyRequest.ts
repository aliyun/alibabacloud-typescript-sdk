// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRbacRoleHierarchyRequest extends $dara.Model {
  /**
   * @example
   * WS20250814102215000001
   */
  bizId?: string;
  /**
   * @example
   * fc94cc51-310f-4485-adb2-ed8c706aff3b
   */
  childRoleId?: string;
  /**
   * @example
   * 71e07711-9a17-49f4-9f83-387a60ee5b64
   */
  parentRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      childRoleId: 'ChildRoleId',
      parentRoleId: 'ParentRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      childRoleId: 'string',
      parentRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

