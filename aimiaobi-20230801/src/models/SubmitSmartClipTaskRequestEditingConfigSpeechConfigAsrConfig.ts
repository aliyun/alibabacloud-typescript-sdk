// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig extends $dara.Model {
  alignment?: string;
  /**
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @example
   * 0
   */
  fontSize?: string;
  /**
   * @example
   * 0
   */
  spacing?: string;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'Alignment',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      spacing: 'Spacing',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      font: 'string',
      fontColor: 'string',
      fontSize: 'string',
      spacing: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

