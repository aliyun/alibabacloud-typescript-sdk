// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDatabaseMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dbId?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      logic: 'boolean',
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

