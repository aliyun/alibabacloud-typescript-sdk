// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallDetailByCallIdRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the call.
   * 
   * > 
   * 
   * *   The CallId parameter is included in the response parameters of the outbound call operation that you call to initiate a call.
   * 
   * *   The date when the call specified by CallId is started must be the same as the date specified by QueryDate.
   * 
   * *   The value of CallId must match the value of ProdId.
   * 
   * This parameter is required.
   * 
   * @example
   * 116014888060^10281631****
   */
  callId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service ID. Valid values:
   * 
   * *   **11000000300006**: voice notification. You can call the [SingleCallByVoice](https://help.aliyun.com/document_detail/393517.html) operation to send a voice notification of the voice notification file type to the specified number.
   * *   **11010000138001**: voice verification code. You can call the [SingleCallByTts](https://help.aliyun.com/document_detail/393519.html) operation to send a voice verification code or a text-to-speech (TTS) voice notification to the specified number.
   * *   **11000000300005**: IVR. You can call the [IvrCall](https://help.aliyun.com/document_detail/393521.html) operation to initiate an interactive voice call to the specified number.
   * *   **11000000300009**: Session Initiation Protocol (SIP) call.
   * *   **11030000180001**: intelligent outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 11000000300006
   */
  prodId?: number;
  /**
   * @remarks
   * The time at which call details are queried. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > The system queries the call records that are generated within 24 hours after the specified point in time. For example, if you specify the time 20:00:01 on November 21, 2022, the system queries the call records that are generated for the specified call ID from 20:00:01 on November 21, 2022, to 20:00:01 on November 22, 2022.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671552000000
   */
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      ownerId: 'OwnerId',
      prodId: 'ProdId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      ownerId: 'number',
      prodId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

