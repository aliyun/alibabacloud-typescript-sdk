// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation business status.
   */
  businessStatus?: string[];
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
  operationStatus?: string[];
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
      businessStatus: 'businessStatus',
      filter: 'filter',
      instanceId: 'instanceId',
      operationStatus: 'operationStatus',
      operationType: 'operationType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      instanceId: 'string',
      operationStatus: { 'type': 'array', 'itemType': 'string' },
      operationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessStatus)) {
      $dara.Model.validateArray(this.businessStatus);
    }
    if(Array.isArray(this.operationStatus)) {
      $dara.Model.validateArray(this.operationStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

