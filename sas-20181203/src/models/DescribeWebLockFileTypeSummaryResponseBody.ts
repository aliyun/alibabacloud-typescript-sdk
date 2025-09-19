// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockFileTypeSummaryResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of attempts.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The type of the protected file. Valid values:
   * 
   * *   **php**: PHP file
   * *   **jsp**: JSP file
   * *   **asp**: ASP file
   * *   **aspx**: ASPX file
   * *   **js**: JS file
   * *   **cgi**: CGI file
   * *   **html**: HTML file
   * *   **htm**: HTM file
   * *   **xml**: XML file
   * *   **shtml**: SHTML file
   * *   **shtm**: SHTM file
   * *   **jpg**: JPG file
   * *   **gif**: GIF file
   * *   **png**: PNG file
   * 
   * @example
   * jsp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockFileTypeSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of events on web tamper proofing returned.
   */
  list?: DescribeWebLockFileTypeSummaryResponseBodyList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4BB99533-4FDC-5B9C-A5E4-5AE3E9BE5C78
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of events on web tamper proofing.
   * 
   * @example
   * 639
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeWebLockFileTypeSummaryResponseBodyList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

