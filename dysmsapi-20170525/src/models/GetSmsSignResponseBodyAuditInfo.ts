// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsSignResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * Audit date and time.
   * 
   * @example
   * 2024-06-03 12:02:34
   */
  auditDate?: string;
  /**
   * @remarks
   * Reasons for not passing the review.
   * 
   * @example
   * reason for rejection.
   */
  rejectInfo?: string;
  static names(): { [key: string]: string } {
    return {
      auditDate: 'AuditDate',
      rejectInfo: 'RejectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDate: 'string',
      rejectInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

