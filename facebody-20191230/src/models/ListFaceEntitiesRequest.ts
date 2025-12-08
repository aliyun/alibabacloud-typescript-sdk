// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaceEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * U1
   */
  entityIdPrefix?: string;
  labels?: string;
  /**
   * @example
   * 50
   */
  limit?: number;
  /**
   * @example
   * 1
   */
  offset?: number;
  /**
   * @example
   * asc
   */
  order?: string;
  /**
   * @example
   * 2
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityIdPrefix: 'EntityIdPrefix',
      labels: 'Labels',
      limit: 'Limit',
      offset: 'Offset',
      order: 'Order',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityIdPrefix: 'string',
      labels: 'string',
      limit: 'number',
      offset: 'number',
      order: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

