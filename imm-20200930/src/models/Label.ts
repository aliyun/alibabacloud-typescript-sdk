// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Clip } from "./Clip";


export class Label extends $dara.Model {
  /**
   * @remarks
   * The central value of the label. This value indicates the confidence that the label is the majority component of the image. Valid values: 0 to 1. A higher value indicates greater confidence.
   * 
   * @example
   * 0.7319999933242798
   */
  centricScore?: number;
  clips?: Clip[];
  labelAlias?: string;
  /**
   * @remarks
   * The confidence level of the label. Valid values: 0 to 1. A higher value indicates greater confidence.
   * 
   * @example
   * 0.9891784601980591
   */
  labelConfidence?: number;
  /**
   * @remarks
   * The label level. Valid values: 1, 2, and 3.
   * 
   * @example
   * 1
   */
  labelLevel?: number;
  /**
   * @remarks
   * The label name.
   */
  labelName?: string;
  /**
   * @remarks
   * The label language, which is represented as a BCP 47 language tag.
   * 
   * @example
   * zh-Hans
   */
  language?: string;
  /**
   * @remarks
   * The name of the parent label.
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

