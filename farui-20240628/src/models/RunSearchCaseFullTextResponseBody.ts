// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomainTrialCourt extends $dara.Model {
  city?: string;
  commonLevel?: string;
  country?: string;
  county?: string;
  district?: string;
  name?: string;
  province?: string;
  /**
   * @example
   * “”
   */
  specialLevel?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      commonLevel: 'commonLevel',
      country: 'country',
      county: 'county',
      district: 'district',
      name: 'name',
      province: 'province',
      specialLevel: 'specialLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      commonLevel: 'string',
      country: 'string',
      county: 'string',
      district: 'string',
      name: 'string',
      province: 'string',
      specialLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain extends $dara.Model {
  abstractObj?: string;
  appliedLaws?: string;
  basicCase?: string;
  caseBasic?: string;
  caseCause?: string;
  caseFeature?: string;
  caseId?: string;
  caseNo?: string;
  caseSummary?: string;
  caseTitle?: string;
  caseType?: string;
  closeCaseCause?: string;
  courtFindOut?: string;
  courtThink?: string;
  dataFrom?: string;
  disputeFocus?: string;
  disputeFocusTag?: string[];
  disputedpoints?: string;
  documentType?: string;
  judgReason?: string;
  keyfacts?: string;
  legalBasis?: string;
  litigants?: string;
  litigationParticipant?: string;
  openCaseCause?: string;
  preTrialProcess?: string;
  referLevel?: string;
  refereeGist?: string;
  sourceContent?: string;
  trialCourt?: RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomainTrialCourt;
  /**
   * @example
   * 2018-09-27
   */
  trialDate?: string;
  trialLevel?: string;
  trialProcess?: string;
  trialProgram?: string;
  verdict?: string;
  static names(): { [key: string]: string } {
    return {
      abstractObj: 'abstractObj',
      appliedLaws: 'appliedLaws',
      basicCase: 'basicCase',
      caseBasic: 'caseBasic',
      caseCause: 'caseCause',
      caseFeature: 'caseFeature',
      caseId: 'caseId',
      caseNo: 'caseNo',
      caseSummary: 'caseSummary',
      caseTitle: 'caseTitle',
      caseType: 'caseType',
      closeCaseCause: 'closeCaseCause',
      courtFindOut: 'courtFindOut',
      courtThink: 'courtThink',
      dataFrom: 'dataFrom',
      disputeFocus: 'disputeFocus',
      disputeFocusTag: 'disputeFocusTag',
      disputedpoints: 'disputedpoints',
      documentType: 'documentType',
      judgReason: 'judgReason',
      keyfacts: 'keyfacts',
      legalBasis: 'legalBasis',
      litigants: 'litigants',
      litigationParticipant: 'litigationParticipant',
      openCaseCause: 'openCaseCause',
      preTrialProcess: 'preTrialProcess',
      referLevel: 'referLevel',
      refereeGist: 'refereeGist',
      sourceContent: 'sourceContent',
      trialCourt: 'trialCourt',
      trialDate: 'trialDate',
      trialLevel: 'trialLevel',
      trialProcess: 'trialProcess',
      trialProgram: 'trialProgram',
      verdict: 'verdict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abstractObj: 'string',
      appliedLaws: 'string',
      basicCase: 'string',
      caseBasic: 'string',
      caseCause: 'string',
      caseFeature: 'string',
      caseId: 'string',
      caseNo: 'string',
      caseSummary: 'string',
      caseTitle: 'string',
      caseType: 'string',
      closeCaseCause: 'string',
      courtFindOut: 'string',
      courtThink: 'string',
      dataFrom: 'string',
      disputeFocus: 'string',
      disputeFocusTag: { 'type': 'array', 'itemType': 'string' },
      disputedpoints: 'string',
      documentType: 'string',
      judgReason: 'string',
      keyfacts: 'string',
      legalBasis: 'string',
      litigants: 'string',
      litigationParticipant: 'string',
      openCaseCause: 'string',
      preTrialProcess: 'string',
      referLevel: 'string',
      refereeGist: 'string',
      sourceContent: 'string',
      trialCourt: RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomainTrialCourt,
      trialDate: 'string',
      trialLevel: 'string',
      trialProcess: 'string',
      trialProgram: 'string',
      verdict: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disputeFocusTag)) {
      $dara.Model.validateArray(this.disputeFocusTag);
    }
    if(this.trialCourt && typeof (this.trialCourt as any).validate === 'function') {
      (this.trialCourt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchCaseFullTextResponseBodyDataCaseResult extends $dara.Model {
  caseDomain?: RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain;
  mode?: string;
  /**
   * @example
   * 0.88
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      caseDomain: 'caseDomain',
      mode: 'mode',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseDomain: RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain,
      mode: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.caseDomain && typeof (this.caseDomain as any).validate === 'function') {
      (this.caseDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchCaseFullTextResponseBodyData extends $dara.Model {
  caseLevel?: string;
  caseResult?: RunSearchCaseFullTextResponseBodyDataCaseResult[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: string;
  queryKeywords?: string[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      caseLevel: 'caseLevel',
      caseResult: 'caseResult',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      query: 'query',
      queryKeywords: 'queryKeywords',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseLevel: 'string',
      caseResult: { 'type': 'array', 'itemType': RunSearchCaseFullTextResponseBodyDataCaseResult },
      currentPage: 'number',
      pageSize: 'number',
      query: 'string',
      queryKeywords: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.caseResult)) {
      $dara.Model.validateArray(this.caseResult);
    }
    if(Array.isArray(this.queryKeywords)) {
      $dara.Model.validateArray(this.queryKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchCaseFullTextResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  data?: RunSearchCaseFullTextResponseBodyData;
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
   * C844BE6B-33A9-5AC4-A1AE-97B131849E0F
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: RunSearchCaseFullTextResponseBodyData,
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

