// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalcBMDResponseBodyDataDetections extends $dara.Model {
  /**
   * @example
   * 0.78
   */
  vertBMD?: number;
  /**
   * @example
   * NaN
   */
  vertCategory?: number;
  /**
   * @example
   * L1
   */
  vertId?: string;
  /**
   * @example
   * -2.5
   */
  vertTScore?: number;
  /**
   * @example
   * NaN
   */
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

