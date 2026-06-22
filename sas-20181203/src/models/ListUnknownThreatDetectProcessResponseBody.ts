// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectProcessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis result. Valid values:
   * 
   * - **black**: A malicious process.
   * 
   * - **white**: A normal process.
   * 
   * - **abnormal**: An abnormal process.
   * 
   * @example
   * white
   */
  analyzeResult?: string;
  explanationEn?: string;
  explanationZh?: string;
  /**
   * @remarks
   * The timestamp of the first occurrence.
   * 
   * @example
   * 1694576692000
   */
  firstTime?: number;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * 5b394b54ca632fe51c4ab4a6dbaf****
   */
  md5?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 2025031506350619216822625103151158982
   */
  processId?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * /usr/bin/tar
   */
  processPath?: string;
  /**
   * @remarks
   * Remarks about the process.
   * 
   * @example
   * safe process
   */
  remark?: string;
  /**
   * @remarks
   * The SHA-256 hash of the file.
   * 
   * @example
   * 3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****
   */
  sha256?: string;
  static names(): { [key: string]: string } {
    return {
      analyzeResult: 'AnalyzeResult',
      explanationEn: 'ExplanationEn',
      explanationZh: 'ExplanationZh',
      firstTime: 'FirstTime',
      md5: 'Md5',
      processId: 'ProcessId',
      processPath: 'ProcessPath',
      remark: 'Remark',
      sha256: 'Sha256',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeResult: 'string',
      explanationEn: 'string',
      explanationZh: 'string',
      firstTime: 'number',
      md5: 'string',
      processId: 'string',
      processPath: 'string',
      remark: 'string',
      sha256: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnknownThreatDetectProcessResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 2
   */
  count?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 83
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnknownThreatDetectProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of process details.
   */
  data?: ListUnknownThreatDetectProcessResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListUnknownThreatDetectProcessResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20456DD5-5CBF-5015-9173-12CA4246B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUnknownThreatDetectProcessResponseBodyData },
      pageInfo: ListUnknownThreatDetectProcessResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

