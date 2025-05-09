// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserTenantsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

