// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResellersResponseBodySupplierInformation } from "./ListResellersResponseBodySupplierInformation";


export class ListResellersResponseBody extends $dara.Model {
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
   * A pagination token.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * distributor informations
   */
  supplierInformation?: ListResellersResponseBodySupplierInformation[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supplierInformation: 'SupplierInformation',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      supplierInformation: { 'type': 'array', 'itemType': ListResellersResponseBodySupplierInformation },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.supplierInformation)) {
      $dara.Model.validateArray(this.supplierInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

