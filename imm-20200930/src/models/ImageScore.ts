// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageScore extends $dara.Model {
  overallQualityScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallQualityScore: 'OverallQualityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallQualityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

