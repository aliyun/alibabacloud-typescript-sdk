// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationsRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RESOURCE_IMPORT
   */
  migrationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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

