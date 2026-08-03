// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferPortraitStyleRequest extends $dara.Model {
  height?: number;
  imageUrl?: string;
  numbers?: number;
  redrawAmplitude?: number;
  style?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      imageUrl: 'imageUrl',
      numbers: 'numbers',
      redrawAmplitude: 'redrawAmplitude',
      style: 'style',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageUrl: 'string',
      numbers: 'number',
      redrawAmplitude: 'number',
      style: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

