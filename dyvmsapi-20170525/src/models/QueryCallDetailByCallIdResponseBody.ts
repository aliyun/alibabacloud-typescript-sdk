// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallDetailByCallIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the call, in the JSON format.
   * 
   * *   **caller**: the calling number.
   * *   **startDate**: the time when the call was started.
   * *   **stateDesc**: the description of the call state.
   * *   **duration**: the call duration. Unit: seconds. The value **0** indicates that the user was not connected.
   * *   **callerShowNumber**: the calling number displayed to the called party.
   * *   **gmtCreate**: the time when the call request was received.
   * *   **state**: the call state. The call state is returned by the Internet service provider (ISP) in real time. For more information about call states, see [ISP-returned error codes](https://help.aliyun.com/document_detail/55085.html).
   * *   **endDate**: the time when the call was ended.
   * *   **calleeShowNumber**: the number displayed to the called party.
   * *   **callee**: the called number.
   * *   **aRingTime**: the time when Line A started to ring, in the yyyy-MM-dd HH:mm:ss format.
   * *   **aEndTime**: the time when ringing on Line A ended, in the yyyy-MM-dd HH:mm:ss format.
   * *   **bRingTime**: the time when Line B started to ring, in the yyyy-MM-dd HH:mm:ss format.
   * *   **bEndTime**: the time when ringing on Line B ended, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * {"caller":"18767****","startDate":"","stateDesc":"502","duration":0,"callerShowNumber":"05344****","gmtCreate":"2017-11-27 20:09:06","state":"502","endDate":"","calleeShowNumber":"053447****","bRingTime":"2022-01-01 12:02:00"，"bEndTime":"2022-01-01 12:02:28"，"callee":"1373546****"}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

