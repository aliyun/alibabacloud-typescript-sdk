// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Label extends $dara.Model {
  centricScore?: number;
  labelConfidence?: number;
  labelLevel?: number;
  labelName?: string;
  language?: string;
  parentLabelName?: string;
  static names(): { [key: string]: string } {
    return {
      centricScore: 'CentricScore',
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
      labelConfidence: 'number',
      labelLevel: 'number',
      labelName: 'string',
      language: 'string',
      parentLabelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

