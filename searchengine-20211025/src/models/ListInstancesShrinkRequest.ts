// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  catalog?: string;
  dataSourceType?: string;
  database?: string;
  /**
   * @remarks
   * Filters instances by description. Fuzzy matching is supported.
   * 
   * @example
   * searchengine instance
   */
  description?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values: vector (Vector Search Edition) and engine (Retrieval Engine Edition).
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 10. The value must be in the range of 1 to 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  table?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'catalog',
      dataSourceType: 'dataSourceType',
      database: 'database',
      description: 'description',
      edition: 'edition',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      table: 'table',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      dataSourceType: 'string',
      database: 'string',
      description: 'string',
      edition: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      table: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

