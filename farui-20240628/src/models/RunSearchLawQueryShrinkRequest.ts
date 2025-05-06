// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchLawQueryShrinkRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  filterConditionShrink?: string;
  pageParamShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryKeywordsShrink?: string;
  threadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      filterConditionShrink: 'filterCondition',
      pageParamShrink: 'pageParam',
      query: 'query',
      queryKeywordsShrink: 'queryKeywords',
      threadShrink: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      filterConditionShrink: 'string',
      pageParamShrink: 'string',
      query: 'string',
      queryKeywordsShrink: 'string',
      threadShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

