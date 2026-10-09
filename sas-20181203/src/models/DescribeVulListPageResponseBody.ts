// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulListPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * CVE-2022-42836
   */
  cveId?: string;
  /**
   * @remarks
   * The Server Guard extended field.
   * 
   * @example
   * {\\"relatedType\\":[{\\"type\\":\\"sys\\"}]}
   */
  extAegis?: string;
  /**
   * @remarks
   * The primary key ID in the database.
   * 
   * @example
   * 40586
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether version comparison is supported. Valid values:
   * 
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 1
   */
  isAegis?: number;
  /**
   * @remarks
   * Indicates whether proof-of-concept (PoC) verification is supported. Valid values:
   * 
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 0
   */
  isSas?: number;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * AVD-2018-8218
   */
  otherId?: string;
  /**
   * @remarks
   * The release time in UTC (ISO 8601 format), for example, 2022-12-13T08:00Z.
   * 
   * @example
   * 2022-12-13T08:00Z
   */
  releaseTime?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * Windows Terminal remote code execute vulnerability
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      extAegis: 'ExtAegis',
      id: 'Id',
      isAegis: 'IsAegis',
      isSas: 'IsSas',
      otherId: 'OtherId',
      releaseTime: 'ReleaseTime',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      extAegis: 'string',
      id: 'number',
      isAegis: 'number',
      isSas: 'number',
      otherId: 'string',
      releaseTime: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeVulListPageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4347E985-6E64-467B-96EC-30D4EA9E32FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeVulListPageResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

