// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectProcessResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The English label of the process.
   * 
   * @example
   * System Process
   */
  tagEn?: string;
  /**
   * @remarks
   * The Chinese label of the process.
   * 
   * @example
   * System Process
   */
  tagZh?: string;
  static names(): { [key: string]: string } {
    return {
      tagEn: 'TagEn',
      tagZh: 'TagZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEn: 'string',
      tagZh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnknownThreatDetectProcessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis result. Valid values:
   * 
   * - **black**: Malicious process.
   * - **white**: Normal process.
   * - **abnormal**: Abnormal process.
   * 
   * @example
   * white
   */
  analyzeResult?: string;
  explanationEn?: string;
  explanationZh?: string;
  /**
   * @remarks
   * The timestamp when the process was first detected.
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
   * The process ID of the event.
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
   * The remarks.
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
  /**
   * @remarks
   * The process labels.
   */
  tags?: ListUnknownThreatDetectProcessResponseBodyDataTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': ListUnknownThreatDetectProcessResponseBodyDataTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
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
   * The page number of the current page in a paged query. This is used for paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. This is used for paging.
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
   * The returned data.
   */
  data?: ListUnknownThreatDetectProcessResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListUnknownThreatDetectProcessResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
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

