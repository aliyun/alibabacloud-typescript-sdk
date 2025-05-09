// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLhSpaceByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_space
   */
  spaceName?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3000
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      spaceName: 'SpaceName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

