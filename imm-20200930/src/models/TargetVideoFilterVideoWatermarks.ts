// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoFilterVideoWatermarks extends $dara.Model {
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  duration?: number;
  dx?: number;
  dy?: number;
  fontApha?: number;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  height?: number;
  referPos?: string;
  startTime?: number;
  type?: string;
  URI?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      fontApha: 'FontApha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      type: 'Type',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      duration: 'number',
      dx: 'number',
      dy: 'number',
      fontApha: 'number',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
      type: 'string',
      URI: 'string',
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

