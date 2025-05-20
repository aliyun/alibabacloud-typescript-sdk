// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOfficeEditUrlWatermark extends $dara.Model {
  fillstyle?: string;
  font?: string;
  horizontal?: number;
  rotate?: number;
  type?: number;
  value?: string;
  vertical?: number;
  static names(): { [key: string]: string } {
    return {
      fillstyle: 'fillstyle',
      font: 'font',
      horizontal: 'horizontal',
      rotate: 'rotate',
      type: 'type',
      value: 'value',
      vertical: 'vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillstyle: 'string',
      font: 'string',
      horizontal: 'number',
      rotate: 'number',
      type: 'number',
      value: 'string',
      vertical: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

