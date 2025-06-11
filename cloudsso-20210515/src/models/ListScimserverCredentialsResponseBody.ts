// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSCIMServerCredentialsResponseBodySCIMServerCredentials } from "./ListScimserverCredentialsResponseBodyScimserverCredentials";


export class ListSCIMServerCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE4B7037-C315-5DD5-826E-57A87950BCD1
   */
  requestId?: string;
  /**
   * @remarks
   * The SCIM credentials.
   */
  SCIMServerCredentials?: ListSCIMServerCredentialsResponseBodySCIMServerCredentials[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredentials: 'SCIMServerCredentials',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredentials: { 'type': 'array', 'itemType': ListSCIMServerCredentialsResponseBodySCIMServerCredentials },
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SCIMServerCredentials)) {
      $dara.Model.validateArray(this.SCIMServerCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

