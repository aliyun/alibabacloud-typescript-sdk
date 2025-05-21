// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList } from "./GetAicoachCheatDetectionResponseBodyVoiceCheatComparisonList";
import { GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList } from "./GetAicoachCheatDetectionResponseBodyVoiceCheatOriginalList";


export class GetAICoachCheatDetectionResponseBodyVoiceCheat extends $dara.Model {
  comparisonList?: GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList[];
  /**
   * @example
   * demo
   */
  desc?: string;
  originalList?: GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList[];
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonList: 'comparisonList',
      desc: 'desc',
      originalList: 'originalList',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonList: { 'type': 'array', 'itemType': GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList },
      desc: 'string',
      originalList: { 'type': 'array', 'itemType': GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.comparisonList)) {
      $dara.Model.validateArray(this.comparisonList);
    }
    if(Array.isArray(this.originalList)) {
      $dara.Model.validateArray(this.originalList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

