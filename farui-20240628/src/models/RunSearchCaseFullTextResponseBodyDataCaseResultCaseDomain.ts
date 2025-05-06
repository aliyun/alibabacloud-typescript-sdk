// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomainTrialCourt } from "./RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomainTrialCourt";


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

