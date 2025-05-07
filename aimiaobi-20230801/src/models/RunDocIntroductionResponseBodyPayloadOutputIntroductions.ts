// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks } from "./RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks";


export class RunDocIntroductionResponseBodyPayloadOutputIntroductions extends $dara.Model {
  blocks?: RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks[];
  /**
   * @example
   * 10
   */
  startPageId?: number;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      blocks: 'Blocks',
      startPageId: 'StartPageId',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocks: { 'type': 'array', 'itemType': RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks },
      startPageId: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blocks)) {
      $dara.Model.validateArray(this.blocks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

