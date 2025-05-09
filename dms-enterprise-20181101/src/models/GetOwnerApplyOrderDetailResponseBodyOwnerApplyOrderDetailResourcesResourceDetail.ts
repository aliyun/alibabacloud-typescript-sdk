// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * PRODUCT
   */
  envType?: string;
  /**
   * @remarks
   * The IDs of the original owners.
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The nicknames of the owners.
   */
  ownerNickNames?: string[];
  /**
   * @remarks
   * The search name of the resource.
   * 
   * @example
   * yuyang【test】
   */
  searchName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * > : This parameter is returned when you submit a Database-OWNER ticket.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      searchName: 'SearchName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
      tableName: 'string',
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

