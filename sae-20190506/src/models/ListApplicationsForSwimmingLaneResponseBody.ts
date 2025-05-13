// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsForSwimmingLaneResponseBodyData } from "./ListApplicationsForSwimmingLaneResponseBodyData";


export class ListApplicationsForSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListApplicationsForSwimmingLaneResponseBodyData[];
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0a98a02315955564772843261e****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListApplicationsForSwimmingLaneResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

