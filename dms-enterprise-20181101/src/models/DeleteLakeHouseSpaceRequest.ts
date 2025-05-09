// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLakeHouseSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace. You can call the [GetLhSpaceByName](https://help.aliyun.com/document_detail/424379.html) operation to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 24
   */
  spaceId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'number',
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

