// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchCaseFullTextShrinkRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  filterConditionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageParamShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryKeywordsShrink?: string;
  referLevel?: string;
  sortKeyAndDirectionShrink?: string;
  threadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      filterConditionShrink: 'filterCondition',
      pageParamShrink: 'pageParam',
      query: 'query',
      queryKeywordsShrink: 'queryKeywords',
      referLevel: 'referLevel',
      sortKeyAndDirectionShrink: 'sortKeyAndDirection',
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
      referLevel: 'string',
      sortKeyAndDirectionShrink: 'string',
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

