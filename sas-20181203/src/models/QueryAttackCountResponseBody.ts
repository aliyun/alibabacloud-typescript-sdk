// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAttackCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of times that the alert is triggered.
   * 
   * @example
   * 28
   */
  eventCount?: number;
  /**
   * @remarks
   * The stage ID of the ATT\\&CK attack.
   * 
   * @example
   * TA0043
   */
  tacticId?: string;
  /**
   * @remarks
   * The type of stage of the ATT\\&CK attack.
   * 
   * @example
   * Data collection
   */
  tacticType?: string;
  static names(): { [key: string]: string } {
    return {
      eventCount: 'EventCount',
      tacticId: 'TacticId',
      tacticType: 'TacticType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCount: 'number',
      tacticId: 'string',
      tacticType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttackCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * An array that consists of the numbers of alert events in different attack phases.
   */
  data?: QueryAttackCountResponseBodyData[];
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D4BE7D77-5B02-5126-A684-A73F6CD3XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether exceptions are handled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': QueryAttackCountResponseBodyData },
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

