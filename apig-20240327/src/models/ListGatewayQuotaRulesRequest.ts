// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayQuotaRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in the rule name used for fuzzy matching.
   * 
   * @example
   * daily
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single call. This parameter is not supported.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is not supported.
   * 
   * @example
   * C4tM8BlBJwHSNyjWpGaci4/7dKNGp1JMgsKtvCagmtY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the rule. Valid values: enabled and disabled. If you do not specify this parameter, all rules are queried.
   * 
   * @example
   * enabled
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The keyword in the name of the associated subject for fuzzy matching based on the consumer or consumer group name.
   * 
   * @example
   * alpha
   */
  subjectNameLike?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      ruleStatus: 'ruleStatus',
      subjectNameLike: 'subjectNameLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleStatus: 'string',
      subjectNameLike: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

