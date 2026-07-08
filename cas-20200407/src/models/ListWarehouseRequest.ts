// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token from a previous response. Use this token to retrieve the next page of results. Omit this parameter for the first request.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of warehouse instance IDs.
   * 
   * @example
   * cas-wh-uc-gl2bsq
   */
  warehouseInstanceIds?: string[];
  /**
   * @remarks
   * A list of warehouse types.
   * 
   * @example
   * pcaCaCert
   */
  warehouseTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      warehouseInstanceIds: 'WarehouseInstanceIds',
      warehouseTypes: 'WarehouseTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      warehouseInstanceIds: { 'type': 'array', 'itemType': 'string' },
      warehouseTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.warehouseInstanceIds)) {
      $dara.Model.validateArray(this.warehouseInstanceIds);
    }
    if(Array.isArray(this.warehouseTypes)) {
      $dara.Model.validateArray(this.warehouseTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

