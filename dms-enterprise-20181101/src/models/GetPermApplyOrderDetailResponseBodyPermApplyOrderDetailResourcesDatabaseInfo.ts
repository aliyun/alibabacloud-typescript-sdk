// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 12345
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the database.
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The nicknames of the owners of the database.
   */
  ownerNickNames?: string[];
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxxx:3306【test】
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNickNames)) {
      $dara.Model.validateArray(this.ownerNickNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

