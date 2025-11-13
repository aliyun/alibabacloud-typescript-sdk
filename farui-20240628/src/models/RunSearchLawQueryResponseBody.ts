// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchLawQueryResponseBodyDataLawResultLawDomain extends $dara.Model {
  abolitionBasis?: string;
  implementYearMonthDate?: string;
  /**
   * @example
   * null
   */
  invalidBasis?: string;
  /**
   * @example
   * ""
   */
  issuingNo?: string;
  issuingOrgan?: string;
  /**
   * @example
   * b2274825c8c3bc2343ca73680243ddc8
   */
  lawId?: string;
  /**
   * @example
   * ccc209683be1509676174fd6890f24b8
   */
  lawItemId?: string;
  lawName?: string;
  lawOrder?: string;
  lawSourceContent?: string;
  lawTitle?: string;
  /**
   * @example
   * "[]"
   */
  modifyBasis?: string;
  potencyLevel?: string;
  releaseYearMonthDate?: string;
  /**
   * @example
   * null
   */
  thematicClassify?: string;
  timeliness?: string;
  static names(): { [key: string]: string } {
    return {
      abolitionBasis: 'abolitionBasis',
      implementYearMonthDate: 'implementYearMonthDate',
      invalidBasis: 'invalidBasis',
      issuingNo: 'issuingNo',
      issuingOrgan: 'issuingOrgan',
      lawId: 'lawId',
      lawItemId: 'lawItemId',
      lawName: 'lawName',
      lawOrder: 'lawOrder',
      lawSourceContent: 'lawSourceContent',
      lawTitle: 'lawTitle',
      modifyBasis: 'modifyBasis',
      potencyLevel: 'potencyLevel',
      releaseYearMonthDate: 'releaseYearMonthDate',
      thematicClassify: 'thematicClassify',
      timeliness: 'timeliness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abolitionBasis: 'string',
      implementYearMonthDate: 'string',
      invalidBasis: 'string',
      issuingNo: 'string',
      issuingOrgan: 'string',
      lawId: 'string',
      lawItemId: 'string',
      lawName: 'string',
      lawOrder: 'string',
      lawSourceContent: 'string',
      lawTitle: 'string',
      modifyBasis: 'string',
      potencyLevel: 'string',
      releaseYearMonthDate: 'string',
      thematicClassify: 'string',
      timeliness: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchLawQueryResponseBodyDataLawResult extends $dara.Model {
  lawDomain?: RunSearchLawQueryResponseBodyDataLawResultLawDomain;
  /**
   * @example
   * 0.0050
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      lawDomain: 'lawDomain',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lawDomain: RunSearchLawQueryResponseBodyDataLawResultLawDomain,
      similarity: 'string',
    };
  }

  validate() {
    if(this.lawDomain && typeof (this.lawDomain as any).validate === 'function') {
      (this.lawDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchLawQueryResponseBodyDataSortKeyAndDirection extends $dara.Model {
  /**
   * @example
   * desc
   */
  releaseYearMonthDate?: string;
  /**
   * @example
   * desc
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      releaseYearMonthDate: 'releaseYearMonthDate',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseYearMonthDate: 'string',
      similarity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchLawQueryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  lawResult?: RunSearchLawQueryResponseBodyDataLawResult[];
  /**
   * @example
   * 0
   */
  pageSize?: number;
  query?: string;
  queryKeywords?: string[];
  sortKeyAndDirection?: RunSearchLawQueryResponseBodyDataSortKeyAndDirection;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      lawResult: 'lawResult',
      pageSize: 'pageSize',
      query: 'query',
      queryKeywords: 'queryKeywords',
      sortKeyAndDirection: 'sortKeyAndDirection',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lawResult: { 'type': 'array', 'itemType': RunSearchLawQueryResponseBodyDataLawResult },
      pageSize: 'number',
      query: 'string',
      queryKeywords: { 'type': 'array', 'itemType': 'string' },
      sortKeyAndDirection: RunSearchLawQueryResponseBodyDataSortKeyAndDirection,
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lawResult)) {
      $dara.Model.validateArray(this.lawResult);
    }
    if(Array.isArray(this.queryKeywords)) {
      $dara.Model.validateArray(this.queryKeywords);
    }
    if(this.sortKeyAndDirection && typeof (this.sortKeyAndDirection as any).validate === 'function') {
      (this.sortKeyAndDirection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchLawQueryResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: RunSearchLawQueryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 05062567-EB51-50F6-AF56-0BE44955848D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RunSearchLawQueryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

