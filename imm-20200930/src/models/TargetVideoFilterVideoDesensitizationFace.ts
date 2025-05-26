// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoFilterVideoDesensitizationFace extends $dara.Model {
  confidence?: number;
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      minSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

