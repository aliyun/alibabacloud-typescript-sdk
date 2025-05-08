// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSupplierRegistrationsResponseBodySupplierRegistrations } from "./ListSupplierRegistrationsResponseBodySupplierRegistrations";


export class ListSupplierRegistrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
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
   * AAAAAdx9kBO7qKpr9My/+XQo0oY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6CC568D-xxxx-xxxx-xxxx-08EB8E9F9F20
   */
  requestId?: string;
  /**
   * @remarks
   * The supplier registrations
   */
  supplierRegistrations?: ListSupplierRegistrationsResponseBodySupplierRegistrations[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supplierRegistrations: 'SupplierRegistrations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      supplierRegistrations: { 'type': 'array', 'itemType': ListSupplierRegistrationsResponseBodySupplierRegistrations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.supplierRegistrations)) {
      $dara.Model.validateArray(this.supplierRegistrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

