// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditHistoryResponseBodyHistories extends $dara.Model {
  /**
   * @remarks
   * The reviewer.
   * 
   * @example
   * auditor
   */
  auditor?: string;
  /**
   * @remarks
   * The review comments, which are provided by the reviewer.
   * 
   * @example
   * Contains nudity
   */
  comment?: string;
  /**
   * @remarks
   * The time when the review record was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The reason why the video failed the review. If the video failed the review, specify the reason.
   * 
   * @example
   * Pornographic video
   */
  reason?: string;
  /**
   * @remarks
   * The manual review result. Valid values:
   * - **Normal**: The video can be played.
   * - **Blocked**: The video is blocked.
   * 
   * @example
   * Blocked
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      auditor: 'Auditor',
      comment: 'Comment',
      creationTime: 'CreationTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditor: 'string',
      comment: 'string',
      creationTime: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The review records.
   */
  histories?: GetAuditHistoryResponseBodyHistories[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-43*****D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The manual review result. Valid values:
   * - **Normal**: The video can be played.
   * - **Blocked**: The video is blocked.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The total number of review records.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      histories: 'Histories',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      histories: { 'type': 'array', 'itemType': GetAuditHistoryResponseBodyHistories },
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.histories)) {
      $dara.Model.validateArray(this.histories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

