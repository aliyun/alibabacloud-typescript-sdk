// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationOperationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The operation business status.
   */
  businessStatusShrink?: string;
  /**
   * @remarks
   * The filter condition for the query.
   * 
   * >
   * > - Supports filtering by operationKey, which is the topic name.
   * 
   * @example
   * xx
   */
  filter?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-zxu37eiqq0x
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation status.
   */
  operationStatusShrink?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * This parameter is required.
   * 
   * @example
   * MIGRATE_MESSAGE
   */
  operationType?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size, which specifies the maximum number of results to return per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessStatusShrink: 'businessStatus',
      filter: 'filter',
      instanceId: 'instanceId',
      operationStatusShrink: 'operationStatus',
      operationType: 'operationType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatusShrink: 'string',
      filter: 'string',
      instanceId: 'string',
      operationStatusShrink: 'string',
      operationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

