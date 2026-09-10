// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 20001
   */
  batchId?: string;
  /**
   * @remarks
   * The report label.
   * 
   * @example
   * daily_check
   */
  label?: string;
  /**
   * @remarks
   * The report generation time.
   * 
   * @example
   * 2024-01-01 12:00:00
   */
  reportTime?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      label: 'label',
      reportTime: 'reportTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      label: 'string',
      reportTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckReportInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of report historical instances.
   */
  data?: ListDataCheckReportInstanceResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues for this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed. Troubleshoot by using errCode and errMessage.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataCheckReportInstanceResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
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

