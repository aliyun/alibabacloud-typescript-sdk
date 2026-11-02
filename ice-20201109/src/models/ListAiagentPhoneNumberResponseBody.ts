// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentPhoneNumberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 132*****683
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The phone number status. Valid values:
   * 
   * - 1: Activation in progress.
   * 
   * - 2: Normal.
   * 
   * - 3: Unregistering.
   * 
   * - 4: Unregistered.
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
   * The returned data array.
   */
  data?: ListAIAgentPhoneNumberResponseBodyData[];
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ************16-412C-B127-******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of phone numbers returned.
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

