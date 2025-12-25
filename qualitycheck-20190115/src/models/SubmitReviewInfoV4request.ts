// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitReviewInfoV4Request extends $dara.Model {
  /**
   * @example
   * 12345
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"comments":"tidComment","jsonReviewResult":"{\\"reviewInfoList\\":[{\\"changed\\":true,\\"comment\\":\\"ridComment\\",\\"matched\\":true,\\"reviewHitResult\\":0,\\"reviewResult\\":1,\\"rid\\":31459,\\"sentenceReviewResults\\":[{\\"changed\\":true,\\"cid\\":95302,\\"comment\\":\\"pidComment\\",\\"hitStatus\\":0,\\"pid\\":\\"0\\",\\"reviewDimensionType\\":\\"2\\",\\"rid\\":31459,\\"sid\\":54104}]}]}","taskId":"20251224-62931498-881B-1436-A93D-1FFBC5D7D4A0","vid":"8cbe2bccf3be4b42bada45136f77d4e9"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

