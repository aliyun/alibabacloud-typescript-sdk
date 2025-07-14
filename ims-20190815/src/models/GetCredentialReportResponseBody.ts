// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the user credential report.
   * 
   * The report is Base64-encoded. After you decode the report, the credential report is in the CSV format.
   * 
   * @example
   * OVZWK4RMOVZW****
   */
  content?: string;
  /**
   * @remarks
   * The time when the user credential report was generated.
   * 
   * @example
   * 2020-10-19T15:06:52Z
   */
  generatedTime?: string;
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: string;
  /**
   * @remarks
   * The parameter that is used to obtain the truncated part. This parameter takes effect only when `IsTruncated` is set to true.
   * 
   * @example
   * EXAMPLE
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A01826E-7601-44B0-B4DF-2B0C509836DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generatedTime: 'GeneratedTime',
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generatedTime: 'string',
      isTruncated: 'string',
      nextToken: 'string',
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

