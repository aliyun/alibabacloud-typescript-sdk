// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExternalDataServicesResponseBodyServiceItems } from "./ListExternalDataServicesResponseBodyServiceItems";


export class ListExternalDataServicesResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The queried services.
   */
  serviceItems?: ListExternalDataServicesResponseBodyServiceItems[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      serviceItems: 'ServiceItems',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      serviceItems: { 'type': 'array', 'itemType': ListExternalDataServicesResponseBodyServiceItems },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceItems)) {
      $dara.Model.validateArray(this.serviceItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

