// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoTagScanResultResponseBodyVulnerabilities } from "./ListRepoTagScanResultResponseBodyVulnerabilities";


export class ListRepoTagScanResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 56B5C92F-F5D9-46E0-823F-EC71D1892DAA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities detected on images.
   * 
   * @example
   * 196
   */
  totalCount?: number;
  /**
   * @remarks
   * The details about the detected vulnerabilities.
   */
  vulnerabilities?: ListRepoTagScanResultResponseBodyVulnerabilities[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulnerabilities: 'Vulnerabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulnerabilities: { 'type': 'array', 'itemType': ListRepoTagScanResultResponseBodyVulnerabilities },
    };
  }

  validate() {
    if(Array.isArray(this.vulnerabilities)) {
      $dara.Model.validateArray(this.vulnerabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

