// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRuleVersionsResponseBodyNormalizationRuleVersions extends $dara.Model {
  createTime?: number;
  normalizationRuleExpression?: string;
  normalizationRuleId?: string;
  normalizationRuleVersion?: number;
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
  maxResults?: number;
  nextToken?: string;
  normalizationRuleVersions?: ListNormalizationRuleVersionsResponseBodyNormalizationRuleVersions[];
  requestId?: string;
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

