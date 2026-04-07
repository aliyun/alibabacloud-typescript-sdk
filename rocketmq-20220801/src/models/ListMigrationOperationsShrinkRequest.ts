// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationOperationsShrinkRequest extends $dara.Model {
  businessStatusShrink?: string;
  /**
   * @example
   * xx
   */
  filter?: string;
  /**
   * @example
   * rmq-cn-zxu37eiqq0x
   */
  instanceId?: string;
  operationStatusShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IMPORT_CONSUMER_GROUP
   */
  operationType?: string;
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

