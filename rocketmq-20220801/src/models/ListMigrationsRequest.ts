// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query.
   * 
   * @example
   * xx
   */
  filter?: string;
  /**
   * @remarks
   * The migration type. Valid values:
   *  - INSTANCE_MIGRATION: instance migration
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE_MIGRATION
   */
  migrationType?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4goe2ckfiva
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      migrationType: 'migrationType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      migrationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

