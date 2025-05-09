// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the physical database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 43153
   */
  dbId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the ID of the tenant.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
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

