// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSupplierRegistrationsRequestFilter } from "./ListSupplierRegistrationsRequestFilter";


export class ListSupplierRegistrationsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListSupplierRegistrationsRequestFilter[];
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum is 100, and the default is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListSupplierRegistrationsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

