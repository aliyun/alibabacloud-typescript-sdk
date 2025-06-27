// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. Fuzzy match is supported.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * The name. Fuzzy match is supported.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The order in which schemas are sorted. Default value: Asc. Valid values:
   * 
   * *   Asc: ascending order
   * *   Desc: descending order
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent entity ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html). For the Hologres metadata crawler type, you can call the ListDatabases operation to query the settings of the `ParentMetaEntityId` parameter.
   * 
   * Configure the `ParentMetaEntityId` parameter in the `${EntityType}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}` format. If a level does not exist, leave the level empty.
   * 
   * >  If you want to query the information about a MaxCompute schema, specify an empty string at the Instance ID level as a placeholder and a MaxCompute project name at the Database name level. Make sure that the schema feature is enabled for the MaxCompute project.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-project:123456XXX::test_project
   * holo-database:h-abc123xxx::test_db
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The field used for sorting. Default value: CreateTime. Valid values:
   * 
   * *   CreateTime
   * *   ModifyTime
   * *   Name
   * *   Type
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The types. Exact match is supported. If this parameter is left empty, all types are queried.
   */
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentMetaEntityId: 'string',
      sortBy: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

