// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReportRecipientStatusResponseBodyReportRecipientList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the email address is verified. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * >  If no email is specified when you create a report, the value of this parameter is empty.
   * 
   * @example
   * 1
   */
  isVerify?: number;
  /**
   * @remarks
   * The email address of the report recipient.
   * 
   * >  If no email is specified when you create a report, the value of this parameter is empty.
   * 
   * @example
   * username@example.com
   */
  recipient?: string;
  static names(): { [key: string]: string } {
    return {
      isVerify: 'IsVerify',
      recipient: 'Recipient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVerify: 'number',
      recipient: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportRecipientStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The report recipients.
   */
  reportRecipientList?: DescribeReportRecipientStatusResponseBodyReportRecipientList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportRecipientList: 'ReportRecipientList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportRecipientList: { 'type': 'array', 'itemType': DescribeReportRecipientStatusResponseBodyReportRecipientList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportRecipientList)) {
      $dara.Model.validateArray(this.reportRecipientList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

