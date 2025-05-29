// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStreamingDataServicesResponseBodyServiceItems } from "./ListStreamingDataServicesResponseBodyServiceItems";


export class ListStreamingDataServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * Returns real-time data service items
   */
  serviceItems?: ListStreamingDataServicesResponseBodyServiceItems[];
  /**
   * @remarks
   * Total record count.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceItems: 'ServiceItems',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceItems: { 'type': 'array', 'itemType': ListStreamingDataServicesResponseBodyServiceItems },
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

