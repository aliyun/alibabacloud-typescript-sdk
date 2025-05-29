// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAIAgentPhoneNumberResponseBodyData } from "./ListAiagentPhoneNumberResponseBodyData";


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

