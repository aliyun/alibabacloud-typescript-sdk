// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagScanSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of medium-severity vulnerabilities.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The number of low-severity vulnerabilities.
   * 
   * @example
   * 22
   */
  highSeverity?: number;
  /**
   * @remarks
   * The number of high-severity vulnerabilities.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 89
   */
  lowSeverity?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * 81
   */
  mediumSeverity?: number;
  /**
   * @remarks
   * The total number of vulnerabilities detected on images.
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 196
   */
  totalSeverity?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4
   */
  unknownSeverity?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      highSeverity: 'HighSeverity',
      isSuccess: 'IsSuccess',
      lowSeverity: 'LowSeverity',
      mediumSeverity: 'MediumSeverity',
      requestId: 'RequestId',
      totalSeverity: 'TotalSeverity',
      unknownSeverity: 'UnknownSeverity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      highSeverity: 'number',
      isSuccess: 'boolean',
      lowSeverity: 'number',
      mediumSeverity: 'number',
      requestId: 'string',
      totalSeverity: 'number',
      unknownSeverity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

