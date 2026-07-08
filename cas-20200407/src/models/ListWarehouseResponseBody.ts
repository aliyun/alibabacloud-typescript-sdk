// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The warehouse instance ID.
   * 
   * @example
   * cas-wh-Q7ID6V
   */
  warehouseInstanceId?: string;
  /**
   * @remarks
   * The warehouse name.
   * 
   * @example
   * default_warehouse
   */
  warehouseName?: string;
  /**
   * @remarks
   * The warehouse type.
   * 
   * @example
   * pcaCaCert
   */
  warehouseType?: string;
  static names(): { [key: string]: string } {
    return {
      warehouseInstanceId: 'WarehouseInstanceId',
      warehouseName: 'WarehouseName',
      warehouseType: 'WarehouseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warehouseInstanceId: 'string',
      warehouseName: 'string',
      warehouseType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarehouseResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of warehouse objects.
   */
  data?: ListWarehouseResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned on each page. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is not returned, all results have been retrieved.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the result set.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWarehouseResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

