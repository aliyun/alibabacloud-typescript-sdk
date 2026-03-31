// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoragePartitionsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The date on which the statistics are collected, in days. Set this parameter to a value in the YYYYMMdd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The sorting column.
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the partition that you want to use for fuzzy match.
   * 
   * @example
   * ds=20241201
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
   * The name of the schema.
   * 
   * @example
   * schema
   */
  schema?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
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

