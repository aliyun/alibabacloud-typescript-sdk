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
   * The review details, which are the specific comments provided by the reviewer.
   * 
   * @example
   * Contains nudity
   */
  comment?: string;
  /**
   * @remarks
   * The time when the record was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The reason for rejection. If the review result is rejection, the reason must be provided.
   * 
   * @example
   * Pornographic video
   */
  reason?: string;
  /**
   * @remarks
   * The review result. Valid values:
   * - **Normal**
   * - **Blocked**
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
   * The list of review history records.
   */
  histories?: GetAuditHistoryResponseBodyHistories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-43*****D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The review result. Indicates the result of the current manual review. Valid values:
   * - **Normal**: the content is normal.
   * - **Blocked**: the content is blocked.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The total number of review history records.
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

