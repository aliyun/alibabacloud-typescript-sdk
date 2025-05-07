// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  calcTotalToken?: boolean;
  /**
   * @example
   * 分类筛选
   */
  category?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2024-10-11_13
   */
  hotTopicVersion?: string;
  locationQuery?: string;
  locationsShrink?: string;
  query?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  stepForCustomSummaryStyleConfigShrink?: string;
  stepForNewsBroadcastContentConfigShrink?: string;
  /**
   * @example
   * ["主题1","主题2"]
   */
  topicsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      calcTotalToken: 'CalcTotalToken',
      category: 'Category',
      current: 'Current',
      hotTopicVersion: 'HotTopicVersion',
      locationQuery: 'LocationQuery',
      locationsShrink: 'Locations',
      query: 'Query',
      size: 'Size',
      stepForCustomSummaryStyleConfigShrink: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfigShrink: 'StepForNewsBroadcastContentConfig',
      topicsShrink: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcTotalToken: 'boolean',
      category: 'string',
      current: 'number',
      hotTopicVersion: 'string',
      locationQuery: 'string',
      locationsShrink: 'string',
      query: 'string',
      size: 'number',
      stepForCustomSummaryStyleConfigShrink: 'string',
      stepForNewsBroadcastContentConfigShrink: 'string',
      topicsShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

