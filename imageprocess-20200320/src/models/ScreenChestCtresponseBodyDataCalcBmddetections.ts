// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataCalcBMDDetections extends $dara.Model {
  vertBMD?: number;
  vertCategory?: number;
  vertId?: string;
  vertTScore?: number;
  vertZScore?: number;
  static names(): { [key: string]: string } {
    return {
      vertBMD: 'VertBMD',
      vertCategory: 'VertCategory',
      vertId: 'VertId',
      vertTScore: 'VertTScore',
      vertZScore: 'VertZScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vertBMD: 'number',
      vertCategory: 'number',
      vertId: 'string',
      vertTScore: 'number',
      vertZScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

