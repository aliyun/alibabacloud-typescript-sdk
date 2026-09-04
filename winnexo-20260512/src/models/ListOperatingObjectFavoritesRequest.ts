// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperatingObjectFavoritesRequest extends $dara.Model {
  /**
   * @remarks
   * The graph name. Call listGraphs to retrieve available graphs.
   * 
   * This parameter is required.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * @example
   * eyJ2IjoxLCJpZCI6MTAwMX0.c2lnbmF0dXJlX2V4YW1wbGU
   */
  nextToken?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * This parameter is required.
   * 
   * @example
   * contract
   */
  objectType?: string;
  /**
   * @remarks
   * The digital employee name (operating object name). Optional.
   * 
   * This parameter is required.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID to take effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      nextToken: 'nextToken',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      nextToken: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

