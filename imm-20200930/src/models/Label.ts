// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Clip } from "./Clip";


export class Label extends $dara.Model {
  /**
   * @remarks
   * The centric score of the tag. This indicates whether the tag is the main subject in the image. The value ranges from 0 to 1. A higher value indicates higher confidence that the tag is the main subject of the image.
   * 
   * @example
   * 0.877
   */
  centricScore?: number;
  /**
   * @remarks
   * Event clips.
   */
  clips?: Clip[];
  /**
   * @remarks
   * The tag alias.
   * 
   * @example
   * 座椅
   */
  labelAlias?: string;
  /**
   * @remarks
   * The tag confidence level. The value ranges from 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 0.95
   */
  labelConfidence?: number;
  /**
   * @remarks
   * The tag level. Valid values are 1, 2, and 3, representing first-level, second-level, and third-level tags, respectively.
   * 
   * @example
   * 2
   */
  labelLevel?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 椅子
   */
  labelName?: string;
  /**
   * @remarks
   * The tag language, in BCP 47 format.
   * 
   * @example
   * zh-Hans
   */
  language?: string;
  /**
   * @remarks
   * The parent tag name.
   * 
   * @example
   * 家具
   */
  parentLabelName?: string;
  static names(): { [key: string]: string } {
    return {
      centricScore: 'CentricScore',
      clips: 'Clips',
      labelAlias: 'LabelAlias',
      labelConfidence: 'LabelConfidence',
      labelLevel: 'LabelLevel',
      labelName: 'LabelName',
      language: 'Language',
      parentLabelName: 'ParentLabelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centricScore: 'number',
      clips: { 'type': 'array', 'itemType': Clip },
      labelAlias: 'string',
      labelConfidence: 'number',
      labelLevel: 'number',
      labelName: 'string',
      language: 'string',
      parentLabelName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clips)) {
      $dara.Model.validateArray(this.clips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

