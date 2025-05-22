// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceTypeRegistrationsResponseBodyRegistrations } from "./ListResourceTypeRegistrationsResponseBodyRegistrations";


export class ListResourceTypeRegistrationsResponseBody extends $dara.Model {
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
   * The registration records of the resource.
   */
  registrations?: ListResourceTypeRegistrationsResponseBodyRegistrations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of registration records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      registrations: 'Registrations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      registrations: { 'type': 'array', 'itemType': ListResourceTypeRegistrationsResponseBodyRegistrations },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.registrations)) {
      $dara.Model.validateArray(this.registrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

