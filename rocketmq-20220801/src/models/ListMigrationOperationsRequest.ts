// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationOperationsRequest extends $dara.Model {
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
      filter: 'filter',
      instanceId: 'instanceId',
      operationType: 'operationType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceId: 'string',
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

