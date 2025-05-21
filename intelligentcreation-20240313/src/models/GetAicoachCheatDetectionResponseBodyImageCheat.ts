// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachCheatDetectionResponseBodyImageCheatList } from "./GetAicoachCheatDetectionResponseBodyImageCheatList";


export class GetAICoachCheatDetectionResponseBodyImageCheat extends $dara.Model {
  /**
   * @example
   * demo
   */
  desc?: string;
  list?: GetAICoachCheatDetectionResponseBodyImageCheatList[];
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      list: 'list',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      list: { 'type': 'array', 'itemType': GetAICoachCheatDetectionResponseBodyImageCheatList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

