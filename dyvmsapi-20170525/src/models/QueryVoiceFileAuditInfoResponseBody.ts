// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVoiceFileAuditInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The review state of the voice file. Valid values:
   * 
   * *   **AUDIT_STATE_INIT**: The voice file was under review.
   * *   **AUDIT_STATE_PASS**: The voice file was approved.
   * *   **AUDIT_STATE_NOT_PASS**: The voice file was rejected.
   * *   **AUDIT_STATE_UPLOADING**: The voice file was approved and is being uploaded.
   * *   **AUDIT_STATE_REDOING**: The voice file was being reprocessed.
   * *   **AUDIT_SATE_CANCEL**: The review of the voice file was canceled.
   * *   **AUDIT_PAUSE**: The review of the voice file was suspended.
   * *   **AUDIT_ORDER_FINISHED**: The voice file was approved by the ticket system and was waiting for the review of the Internet service provider (ISP).
   * 
   * @example
   * AUDIT_STATE_NOT_PASS
   */
  auditState?: string;
  /**
   * @remarks
   * The reason why the voice file was rejected.
   * 
   * @example
   * This business is not supported
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The code of the voice file.
   * 
   * @example
   * 8501d2eb-efbb-471f-xxx8-****.wav
   */
  voiceCode?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      rejectInfo: 'RejectInfo',
      voiceCode: 'VoiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      rejectInfo: 'string',
      voiceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceFileAuditInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * The value OK indicates that the request was successful. For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryVoiceFileAuditInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryVoiceFileAuditInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
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

