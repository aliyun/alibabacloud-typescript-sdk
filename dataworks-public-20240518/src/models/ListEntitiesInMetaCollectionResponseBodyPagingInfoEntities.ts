// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 1737078994080
   */
  createTime?: number;
  description?: string;
  /**
   * @remarks
   * The entity ID. Entities can only be tables. This parameter is left empty if the entity is deleted.
   * 
   * @example
   * dlf-table:123456789:test_catalog:test_database::test_table
   */
  id?: string;
  /**
   * @example
   * 1737078994080
   */
  modifyTime?: number;
  /**
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The type of the entity.
   * 
   * @example
   * dlf-table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      description: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

