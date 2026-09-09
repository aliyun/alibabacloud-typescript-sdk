// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoragePartitionsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The date for which to retrieve statistics. The date must be in `YYYYMMdd` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The column to sort by.
   * 
   * @example
   * totalFrequency
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The partition name. This parameter supports fuzzy matching.
   * 
   * @example
   * 20241201
   */
  partitionPrefix?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The schema that contains the table.
   * 
   * @example
   * schema
   */
  schema?: string;
  /**
   * @remarks
   * The tenant ID. You can find this ID in the MaxCompute console by navigating to **Tenant Management** > **Tenant Properties**.
   * 
   * @example
   * 40713753659****
   */
  tenantId?: string;
  /**
   * @remarks
   * The storage types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      partitionPrefix: 'partitionPrefix',
      region: 'region',
      schema: 'schema',
      tenantId: 'tenantId',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionPrefix: 'string',
      region: 'string',
      schema: 'string',
      tenantId: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

