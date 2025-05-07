// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig } from "./GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig";
import { GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig } from "./GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig";


export class GetHotTopicBroadcastRequest extends $dara.Model {
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
  locations?: string[];
  query?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  stepForCustomSummaryStyleConfig?: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig;
  stepForNewsBroadcastContentConfig?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig;
  /**
   * @example
   * ["主题1","主题2"]
   */
  topics?: string[];
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
      locations: 'Locations',
      query: 'Query',
      size: 'Size',
      stepForCustomSummaryStyleConfig: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfig: 'StepForNewsBroadcastContentConfig',
      topics: 'Topics',
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
      locations: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      size: 'number',
      stepForCustomSummaryStyleConfig: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig,
      stepForNewsBroadcastContentConfig: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig,
      topics: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locations)) {
      $dara.Model.validateArray(this.locations);
    }
    if(this.stepForCustomSummaryStyleConfig && typeof (this.stepForCustomSummaryStyleConfig as any).validate === 'function') {
      (this.stepForCustomSummaryStyleConfig as any).validate();
    }
    if(this.stepForNewsBroadcastContentConfig && typeof (this.stepForNewsBroadcastContentConfig as any).validate === 'function') {
      (this.stepForNewsBroadcastContentConfig as any).validate();
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

