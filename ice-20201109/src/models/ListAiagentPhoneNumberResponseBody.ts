// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentPhoneNumberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Phone number.
   * 
   * @example
   * 132*****683
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Phone number status.
   * 
   * - 1: "Activation in progress".
   * 
   * - 2: "Normal".
   * 
   * - 3: "Deactivation in progress".
   * 
   * - 4: "Deactivated".
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentPhoneNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * Array of returned Data.
   */
  data?: ListAIAgentPhoneNumberResponseBodyData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ************16-412C-B127-******
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of phone numbers found in the query.
   * 
   * @example
   * 186
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAIAgentPhoneNumberResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
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

