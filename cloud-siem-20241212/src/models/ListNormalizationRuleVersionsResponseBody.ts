// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRuleVersionsResponseBodyNormalizationRuleVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The expression of the normalization rule.
   * 
   * @example
   * * | pack-fields -include=\\"[\\s\\S]+\\" as extend_content
   */
  normalizationRuleExpression?: string;
  /**
   * @remarks
   * The ID of the normalization rule.
   * 
   * @example
   * nr-z0b2ssjteut85uoh9nzp
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The version of the normalization rule.
   * 
   * @example
   * V1
   */
  normalizationRuleVersion?: number;
  /**
   * @remarks
   * The time when the version was updated.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationRuleExpression: 'string',
      normalizationRuleId: 'string',
      normalizationRuleVersion: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationRuleVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the NextToken parameter is empty, no more results are available.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of normalization rule versions.
   */
  normalizationRuleVersions?: ListNormalizationRuleVersionsResponseBodyNormalizationRuleVersions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationRuleVersions: 'NormalizationRuleVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationRuleVersions: { 'type': 'array', 'itemType': ListNormalizationRuleVersionsResponseBodyNormalizationRuleVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationRuleVersions)) {
      $dara.Model.validateArray(this.normalizationRuleVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

