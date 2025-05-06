// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchCaseFullTextResponseBodyDataCaseResult } from "./RunSearchCaseFullTextResponseBodyDataCaseResult";


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

