// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRealisticPortraitRequest extends $dara.Model {
  ages?: number[];
  /**
   * @example
   * 1
   */
  cloth?: number;
  /**
   * @example
   * 1
   */
  color?: number;
  /**
   * @example
   * 11
   */
  custom?: string;
  face?: number[];
  /**
   * @example
   * 1
   */
  figure?: number;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * 1
   */
  hairColor?: number;
  /**
   * @example
   * 1
   */
  hairstyle?: number;
  /**
   * @example
   * 500
   */
  height?: number;
  imageUrl?: string;
  /**
   * @example
   * 4
   */
  numbers?: number;
  /**
   * @example
   * 1:1
   */
  ratio?: string;
  /**
   * @example
   * 500
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      ages: 'ages',
      cloth: 'cloth',
      color: 'color',
      custom: 'custom',
      face: 'face',
      figure: 'figure',
      gender: 'gender',
      hairColor: 'hairColor',
      hairstyle: 'hairstyle',
      height: 'height',
      imageUrl: 'imageUrl',
      numbers: 'numbers',
      ratio: 'ratio',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ages: { 'type': 'array', 'itemType': 'number' },
      cloth: 'number',
      color: 'number',
      custom: 'string',
      face: { 'type': 'array', 'itemType': 'number' },
      figure: 'number',
      gender: 'number',
      hairColor: 'number',
      hairstyle: 'number',
      height: 'number',
      imageUrl: 'string',
      numbers: 'number',
      ratio: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ages)) {
      $dara.Model.validateArray(this.ages);
    }
    if(Array.isArray(this.face)) {
      $dara.Model.validateArray(this.face);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

