// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentPhoneNumberResponseBodyData extends $dara.Model {
  /**
   * @example
   * 132*****683
   */
  phoneNumber?: string;
  /**
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
  data?: ListAIAgentPhoneNumberResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ************16-412C-B127-******
   */
  requestId?: string;
  /**
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

