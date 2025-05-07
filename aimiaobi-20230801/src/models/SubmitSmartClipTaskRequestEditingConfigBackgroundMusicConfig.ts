// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig extends $dara.Model {
  style?: string;
  /**
   * @example
   * 0.2
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      style: 'Style',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      style: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

